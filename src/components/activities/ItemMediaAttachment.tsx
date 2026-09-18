import React, { useState, useEffect, useRef } from 'react';
import {
  MediaItem,
  getPhaseMediaItems,
  savePhaseMediaItem,
  deletePhaseMediaItem,
  formatBytes,
  getYouTubeEmbedUrl
} from '../../utils/mediaStorage';
import {
  Image as ImageIcon,
  Video as VideoIcon,
  Link as LinkIcon,
  Trash2,
  Plus,
  ExternalLink,
  Upload,
  Maximize2,
  X,
  Sparkles,
  Eye,
  Globe,
  Film,
  Camera
} from 'lucide-react';

interface Props {
  periodId: string;
  itemId: string;
  itemTitle?: string;
  itemTask?: string;
}

export const ItemMediaAttachment: React.FC<Props> = ({
  periodId,
  itemId,
  itemTitle = '',
  itemTask = ''
}) => {
  const phaseKey = `kham_pha_${itemId}`;

  const [items, setItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAddingLink, setIsAddingLink] = useState<boolean>(false);
  const [linkTitle, setLinkTitle] = useState<string>('');
  const [linkUrl, setLinkUrl] = useState<string>('');
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Extract figure reference from title or task (e.g., "Hình 1", "Hình 2", "Hình 3", etc.)
  const figureMatch = (itemTitle + ' ' + itemTask).match(/Hình\s*\d+[a-zA-Z]?/i);
  const detectedFigure = figureMatch ? figureMatch[0] : null;

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    getPhaseMediaItems(periodId, phaseKey)
      .then((data) => {
        if (isMounted) {
          setItems(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [periodId, phaseKey]);

  // Handle local file upload
  const handleFileUpload = async (file: File) => {
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      alert('Vui lòng chọn tệp hình ảnh (PNG, JPG, WebP) hoặc video (MP4, WebM)!');
      return;
    }

    setUploadStatus(`Đang tải ${file.name}...`);

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result as string;
        const defaultTitle = detectedFigure
          ? `${detectedFigure} - ${file.name.replace(/\.[^/.]+$/, '')}`
          : file.name.replace(/\.[^/.]+$/, '');

        const newItem: MediaItem = {
          id: `item_media_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
          periodId,
          phaseId: phaseKey,
          type: isImage ? 'image' : 'video',
          title: defaultTitle,
          source: 'file',
          dataUrl,
          blob: file,
          fileType: file.type,
          fileSize: file.size,
          createdAt: Date.now()
        };

        await savePhaseMediaItem(newItem);
        setItems((prev) => [newItem, ...prev]);
        setUploadStatus(null);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Lỗi khi tải tệp:', err);
      setUploadStatus(null);
      alert('Có lỗi khi tải tệp lên. Vui lòng thử lại!');
    }
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
      e.target.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleAddLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkUrl.trim()) return;

    let detectedType: 'link' | 'video' | 'image' = 'link';
    const urlLower = linkUrl.toLowerCase();
    if (getYouTubeEmbedUrl(linkUrl) || urlLower.includes('.mp4') || urlLower.includes('.webm')) {
      detectedType = 'video';
    } else if (
      urlLower.includes('.png') ||
      urlLower.includes('.jpg') ||
      urlLower.includes('.jpeg') ||
      urlLower.includes('.webp') ||
      urlLower.includes('.gif')
    ) {
      detectedType = 'image';
    }

    const defaultTitle = detectedFigure
      ? `${detectedFigure} - ${linkTitle.trim() || 'Tư liệu mạng'}`
      : linkTitle.trim() || linkUrl;

    const newItem: MediaItem = {
      id: `item_link_${Date.now()}`,
      periodId,
      phaseId: phaseKey,
      type: detectedType,
      title: defaultTitle,
      source: 'url',
      url: linkUrl.trim(),
      createdAt: Date.now()
    };

    await savePhaseMediaItem(newItem);
    setItems((prev) => [newItem, ...prev]);
    setLinkTitle('');
    setLinkUrl('');
    setIsAddingLink(false);
  };

  const confirmDelete = async (id: string) => {
    await deletePhaseMediaItem(id);
    setItems((prev) => prev.filter((item) => item.id !== id));
    setItemToDelete(null);
  };

  return (
    <div className="rounded-2xl border border-blue-200/90 bg-gradient-to-br from-sky-50/50 via-white to-blue-50/40 p-4 sm:p-5 space-y-3.5 transition-all">
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileInputChange}
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={videoInputRef}
        onChange={onFileInputChange}
        accept="video/*"
        className="hidden"
      />

      {/* Header bar of the image observation box */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
            <Camera size={15} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-blue-950 uppercase tracking-wider">
                {detectedFigure ? `Hình ảnh / Video quan sát (${detectedFigure} SGK)` : 'Hình ảnh / Video quan sát SGK'}
              </span>
              {detectedFigure && (
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-2xs">
                  {detectedFigure}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Thầy/cô tải ảnh chụp SGK hoặc video minh họa để học sinh quan sát trực tiếp trên màn hình
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-blue-700 border border-blue-300 hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer shadow-2xs"
            title="Tải ảnh từ máy tính (ảnh chụp trang SGK, sơ đồ...)"
          >
            <ImageIcon size={14} />
            <span>Tải ảnh {detectedFigure || ''}</span>
          </button>

          <button
            type="button"
            onClick={() => videoInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-violet-700 border border-violet-200 hover:bg-violet-50 hover:border-violet-300 transition-all cursor-pointer shadow-2xs"
            title="Tải video minh họa từ máy tính"
          >
            <VideoIcon size={14} />
            <span>Tải video</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAddingLink(!isAddingLink)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-all cursor-pointer shadow-2xs"
            title="Dán liên kết ảnh, YouTube hoặc trang web"
          >
            <LinkIcon size={14} />
            <span>Chèn link / YouTube</span>
          </button>
        </div>
      </div>

      {/* Uploading indicator */}
      {uploadStatus && (
        <div className="p-3 rounded-xl bg-sky-100 border border-sky-300 text-xs font-bold text-sky-900 flex items-center gap-2 animate-pulse">
          <Upload size={15} className="animate-bounce" />
          <span>{uploadStatus}</span>
        </div>
      )}

      {/* Form adding URL / YouTube */}
      {isAddingLink && (
        <form
          onSubmit={handleAddLink}
          className="p-4 rounded-xl bg-white border-2 border-indigo-200 space-y-2.5 animate-fadeIn shadow-xs"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-500" />
              <span>Chèn link ảnh, video YouTube cho {detectedFigure || 'mục này'}</span>
            </span>
            <button
              type="button"
              onClick={() => setIsAddingLink(false)}
              className="text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder={`Tên tư liệu (VD: ${detectedFigure || 'Hình minh họa'} - Xe đạp, máy cày...)`}
              value={linkTitle}
              onChange={(e) => setLinkTitle(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="url"
              required
              placeholder="Dán link ảnh hoặc link YouTube..."
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setIsAddingLink(false)}
              className="px-3 py-1 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-3.5 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer flex items-center gap-1 shadow-2xs"
            >
              <Plus size={13} />
              <span>Thêm ngay</span>
            </button>
          </div>
        </form>
      )}

      {/* When no media uploaded yet */}
      {items.length === 0 && !isLoading && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`p-5 rounded-xl border-2 border-dashed transition-all text-center space-y-1.5 cursor-pointer ${
            isDragOver
              ? 'border-blue-500 bg-blue-50/80 scale-101'
              : 'border-blue-200/80 bg-white/70 hover:bg-white hover:border-blue-400'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-800">
            <Upload size={16} className="text-blue-600" />
            <span>
              {detectedFigure
                ? `Bấm vào đây hoặc kéo thả ảnh chụp ${detectedFigure} SGK vào để trình chiếu cho học sinh`
                : 'Bấm vào đây hoặc kéo thả ảnh chụp hình quan sát SGK vào để học sinh xem'}
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Hỗ trợ ảnh JPG, PNG, WebP hoặc video MP4 từ máy tính • Có nút xóa ngay nếu không phù hợp
          </p>
        </div>
      )}

      {/* Grid of uploaded items for this specific figure / activity */}
      {items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          {items.map((item) => {
            const ytEmbed = item.url ? getYouTubeEmbedUrl(item.url) : null;
            const isDeleting = itemToDelete === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-blue-200/90 overflow-hidden shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image render */}
                  {item.type === 'image' && (
                    <div className="relative aspect-video sm:aspect-16/10 bg-slate-100 overflow-hidden group/img">
                      <img
                        src={item.dataUrl || item.url}
                        alt={item.title}
                        className="w-full h-full object-contain bg-slate-900/5 p-1 group-hover/img:scale-102 transition-transform cursor-pointer"
                        onClick={() => setPreviewImage(item.dataUrl || item.url || null)}
                      />
                      <button
                        onClick={() => setPreviewImage(item.dataUrl || item.url || null)}
                        className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all cursor-pointer shadow-xs"
                        title="Phóng to ảnh trình chiếu"
                      >
                        <Maximize2 size={15} />
                      </button>
                    </div>
                  )}

                  {/* Video render */}
                  {item.type === 'video' && (
                    <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
                      {ytEmbed ? (
                        <iframe
                          src={ytEmbed}
                          title={item.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={item.dataUrl || item.url}
                          controls
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  )}

                  {/* Link render */}
                  {item.type === 'link' && (
                    <div className="p-3 bg-indigo-50/60 border-b border-indigo-100 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                        <Globe size={16} />
                      </div>
                      <div className="truncate flex-1">
                        <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block">
                          Liên kết mạng
                        </span>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-slate-800 hover:text-indigo-600 truncate block underline"
                        >
                          {item.url}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Title & info */}
                  <div className="p-3 space-y-0.5">
                    <h5 className="text-xs font-bold text-slate-900 line-clamp-1">
                      {item.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                      <span className="font-semibold text-blue-700">
                        {item.type === 'image' ? 'Ảnh quan sát' : item.type === 'video' ? 'Video' : 'Link'}
                      </span>
                      {item.fileSize && <span>• {formatBytes(item.fileSize)}</span>}
                    </div>
                  </div>
                </div>

                {/* Card footer with Zoom & Prominent DELETE Button */}
                <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    {item.type === 'image' && (
                      <button
                        onClick={() => setPreviewImage(item.dataUrl || item.url || null)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:text-blue-900 cursor-pointer"
                      >
                        <Eye size={12} />
                        <span>Phóng to</span>
                      </button>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-700 hover:text-indigo-900"
                      >
                        <ExternalLink size={12} />
                        <span>Mở link</span>
                      </a>
                    )}
                  </div>

                  {/* NÚT XÓA NỔI BẬT NẾU TẢI LÊN THẤY KHÔNG PHÙ HỢP NỮA */}
                  {!isDeleting ? (
                    <button
                      onClick={() => setItemToDelete(item.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer shadow-2xs hover:scale-102"
                      title="Xóa ảnh/video này nếu thấy không còn phù hợp"
                    >
                      <Trash2 size={12} />
                      <span>Xóa</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1 animate-fadeIn">
                      <button
                        onClick={() => confirmDelete(item.id)}
                        className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-600 text-white hover:bg-rose-700 cursor-pointer"
                      >
                        Xóa luôn
                      </button>
                      <button
                        onClick={() => setItemToDelete(null)}
                        className="px-1.5 py-0.5 rounded text-[11px] font-medium text-slate-600 hover:bg-slate-200 cursor-pointer"
                      >
                        Hủy
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal for Classroom presentation */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
              <span className="text-xs font-bold bg-black/60 text-white px-3 py-1 rounded-full backdrop-blur-xs">
                {detectedFigure || 'Hình quan sát SGK'}
              </span>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            <img
              src={previewImage}
              alt="Hình quan sát phóng to"
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};
