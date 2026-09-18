/**
 * IndexedDB storage utility for Teacher Supplemental Media (Images, Videos, Web Links)
 * Supports high-capacity local client storage for files up to dozens of MBs.
 */

export interface MediaItem {
  id: string;
  periodId: string; // e.g. 'tiet-1'
  phaseId: string; // e.g. 'khoi_dong', 'kham_pha', 'thao_luan', 'luyen_tap', 'thuc_hanh', 'van_dung', 'giao_an'
  type: 'image' | 'video' | 'link';
  title: string;
  source: 'file' | 'url';
  url?: string;
  blob?: Blob;
  dataUrl?: string;
  fileType?: string;
  fileSize?: number;
  createdAt: number;
}

const DB_NAME = 'CongNghe5_TeacherMediaDB';
const DB_VERSION = 1;
const STORE_NAME = 'phase_media';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('period_phase', ['periodId', 'phaseId'], { unique: false });
        store.createIndex('periodId', 'periodId', { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// In-memory fallback in case of strict private browsing limitations
const memoryStore = new Map<string, MediaItem>();

export async function getPhaseMediaItems(periodId: string, phaseId: string): Promise<MediaItem[]> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const index = store.index('period_phase');
      const request = index.getAll(IDBKeyRange.only([periodId, phaseId]));

      request.onsuccess = () => {
        const items = (request.result || []) as MediaItem[];
        // Sort descending by creation date
        items.sort((a, b) => b.createdAt - a.createdAt);
        resolve(items);
      };

      request.onerror = () => {
        // Fallback to memory
        const filtered = Array.from(memoryStore.values()).filter(
          (i) => i.periodId === periodId && i.phaseId === phaseId
        );
        resolve(filtered);
      };
    });
  } catch (err) {
    const filtered = Array.from(memoryStore.values()).filter(
      (i) => i.periodId === periodId && i.phaseId === phaseId
    );
    return filtered;
  }
}

export async function savePhaseMediaItem(item: MediaItem): Promise<void> {
  memoryStore.set(item.id, item);
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.put(item);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('Failed to save to IndexedDB, stored in memory store:', err);
  }
}

export async function deletePhaseMediaItem(id: string): Promise<void> {
  memoryStore.delete(id);
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('Failed to delete from IndexedDB:', err);
  }
}

/**
 * Format bytes to readable string (e.g. 2.4 MB)
 */
export function formatBytes(bytes?: number): string {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * Helper to convert YouTube URL to embed format
 */
export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return null;
}
