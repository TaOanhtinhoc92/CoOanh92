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
  CheckCircle2,
  AlertCircle,
  FolderPlus,
  Sparkles,
  Eye,
  Film,
  Globe
} from 'lucide-react';

interface Props {
  periodId: string;
  phaseId: string;
  phaseLabel: string;
}

export const PhaseMediaGallery: React.FC<Props> = ({
  periodId,
  phaseId,
  phaseLabel
}) => {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAddingLink, setIsAddingLink] = useState<boolean>(false);
  const [linkTitle, setLinkTitle] = useState<string>('');
  const [linkUrl, setLinkUrl] = useState<string>('');
  const [linkType, setLinkType] = useState<'link' | 'video' | 'image'>('link');
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Load media items whenever periodId or phaseId changes
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    getPhaseMediaItems(periodId, phaseId)
      .then((loaded) => {
        if (isMounted) {
          setItems(loaded);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [periodId, phaseId]);

  // Handle local image/video file upload
  const handleFileUpload = async (file: File) => {
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      alert('Vui lòng chọn tệp hình ảnh (PNG, JPG, WebP) hoặc video (MP4, WebM)!');
      return;
    }

    setUploadStatus(`Đang xử lý ${file.name}...`);

    try {
      // Create data URL or object URL for fast local rendering
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result as string;
        const newItem: MediaItem = {
          id: `media_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          periodId,
          phaseId,
          type: isImage ? 'image' : 'video',
          title: file.name.replace(/\.[^/.]+$/, ''),
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

  // Drag and Drop support
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  // Handle Link submission
  const handleAddLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkUrl.trim()) return;

    let detectedType: 'link' | 'video' | 'image' = linkType;
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

    const newItem: MediaItem = {
      id: `media_link_${Date.now()}`,
      periodId,
      phaseId,
      type: detectedType,
      title: linkTitle.trim() || linkUrl,
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

  // Handle Delete with confirmation
  const confirmDelete = async (id: string) => {
    await deletePhaseMediaItem(id);
    setItems((prev) => prev.filter((item) => item.id !== id));
    setItemToDelete(null);
  };

  return (
    <section className="bg-white rounded-3xl border border-indigo-100 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Hidden file inputs */}
      <input
        type="file"
        ref={imageInputRef}
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

      {/* Header banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
              <FolderPlus size={18} />
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Học liệu & Phương tiện bổ sung của Giáo viên
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-2">
            <span>Dành riêng cho phần:</span>
            <strong className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
              {phaseLabel}
            </strong>
            {items.length > 0 && (
              <span className="text-slate-400 font-semibold">• {items.length} tư liệu đã đính kèm</span>
            )}
          </p>
        </div>

        {/* Action Buttons for Upload */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Upload Image Button */}
          <button
            onClick={() => imageInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100 transition-all cursor-pointer shadow-2xs hover:scale-102"
            title="Tải ảnh từ máy tính (PNG, JPG, WebP)"
          >
            <ImageIcon size={15} />
            <span>Tải ảnh máy tính</span>
          </button>

          {/* Upload Video Button */}
          <button
            onClick={() => videoInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-violet-50 text-violet-700 border border-violet-200 hover:bg-violet-100 transition-all cursor-pointer shadow-2xs hover:scale-102"
            title="Tải video từ máy tính (MP4, WebM)"
          >
            <VideoIcon size={15} />
            <span>Tải video máy tính</span>
          </button>

          {/* Add URL / YouTube link */}
          <button
            onClick={() => setIsAddingLink(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-all cursor-pointer shadow-sm hover:scale-102"
            title="Dán link YouTube, ảnh mạng hoặc trang web"
          >
            <LinkIcon size={15} />
            <span>Thêm link / Video mạng</span>
          </button>
        </div>
      </div>

      {/* Upload status message */}
      {uploadStatus && (
        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800 flex items-center gap-2 animate-pulse">
          <Upload size={16} className="animate-bounce" />
          <span>{uploadStatus}</span>
        </div>
      )}

      {/* Link Input Modal / Dropdown */}
      {isAddingLink && (
        <form
          onSubmit={handleAddLink}
          className="p-5 rounded-2xl bg-indigo-50/70 border-2 border-indigo-200 space-y-3 animate-fadeIn"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black text-indigo-950 flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" />
              <span>Thêm Liên kết hoặc Video trực tuyến (YouTube / Trang web)</span>
            </h4>
            <button
              type="button"
              onClick={() => setIsAddingLink(false)}
              className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tên / Chú thích học liệu (tùy chọn)
              </label>
              <input
                type="text"
                placeholder="VD: Video quy trình sản xuất xe điện, Sơ đồ cấu tạo..."
                value={linkTitle}
                onChange={(e) => setLinkTitle(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Địa chỉ liên kết URL <span className="text-rose-500">*</span>
              </label>
              <input
                type="url"
                required
                placeholder="https://www.youtube.com/watch?v=... hoặc https://..."
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="text-[11px] text-slate-500">
              💡 <em>Tự động nhận diện video YouTube, ảnh trực tuyến hoặc liên kết trang web.</em>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAddingLink(false)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <Plus size={14} />
                <span>Thêm vào phần học</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Drag and Drop Zone & Empty state */}
      {items.length === 0 && !isLoading && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
          className={`p-8 sm:p-12 rounded-2xl border-2 border-dashed transition-all text-center space-y-3 cursor-pointer ${
            isDragOver
              ? 'border-indigo-500 bg-indigo-50/70 scale-101'
              : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-indigo-300'
          }`}
          onClick={() => imageInputRef.current?.click()}
        >
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 mx-auto flex items-center justify-center shadow-2xs">
            <Upload size={28} />
          </div>
          <div>
            <h4 className="text-base font-black text-slate-800">
              Chưa có học liệu bổ sung nào cho phần này
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
              Kéo thả hình ảnh, video vào đây hoặc bấm các nút phía trên để tải ảnh từ máy tính, video minh họa hoặc liên kết YouTube.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-1 text-xs font-semibold text-indigo-600">
            <span>Click để chọn tệp từ máy tính</span>
          </div>
        </div>
      )}

      {/* Media Items Display Grid */}
      {items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => {
            const ytEmbed = item.url ? getYouTubeEmbedUrl(item.url) : null;
            const isDeleting = itemToDelete === item.id;

            return (
              <div
                key={item.id}
                className="bg-slate-50/80 rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between group relative"
              >
                {/* Media Preview Container */}
                <div>
                  {item.type === 'image' && (
                    <div className="relative aspect-video bg-slate-200 overflow-hidden group/img">
                      <img
                        src={item.dataUrl || item.url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => setPreviewImage(item.dataUrl || item.url || null)}
                      />
                      <button
                        onClick={() => setPreviewImage(item.dataUrl || item.url || null)}
                        className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-all cursor-pointer opacity-0 group-hover/img:opacity-100"
                        title="Phóng to ảnh"
                      >
                        <Maximize2 size={14} />
                      </button>
                    </div>
                  )}

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

                  {item.type === 'link' && (
                    <div className="p-4 bg-gradient-to-br from-indigo-50/70 to-sky-50/60 border-b border-indigo-100 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Globe size={20} />
                      </div>
                      <div className="truncate flex-1">
                        <div className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
                          Liên kết mạng
                        </div>
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

                  {/* Title & Metadata */}
                  <div className="p-4 space-y-1">
                    <h5 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                      {item.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="uppercase font-semibold text-slate-600">
                        {item.type === 'image' ? 'Hình ảnh' : item.type === 'video' ? 'Video' : 'Liên kết'}
                      </span>
                      {item.fileSize && <span>• {formatBytes(item.fileSize)}</span>}
                      <span>• {new Date(item.createdAt).toLocaleDateString('vi-VN')}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Actions: Open / Delete */}
                <div className="px-4 py-3 bg-white border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                      >
                        <ExternalLink size={13} />
                        <span>Mở liên kết</span>
                      </a>
                    )}
                    {item.type === 'image' && !item.url && (
                      <button
                        onClick={() => setPreviewImage(item.dataUrl || null)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 cursor-pointer"
                      >
                        <Eye size={13} />
                        <span>Xem ảnh</span>
                      </button>
                    )}
                  </div>

                  {/* Nút XÓA NỔI BẬT với hộp xác nhận nhanh */}
                  {!isDeleting ? (
                    <button
                      onClick={() => setItemToDelete(item.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer shadow-2xs hover:scale-102"
                      title="Xóa phương tiện này nếu không còn phù hợp"
                    >
                      <Trash2 size={14} />
                      <span>Xóa</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 animate-fadeIn">
                      <button
                        onClick={() => confirmDelete(item.id)}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 cursor-pointer shadow-2xs"
                      >
                        Xác nhận xóa
                      </button>
                      <button
                        onClick={() => setItemToDelete(null)}
                        className="px-2 py-1 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 cursor-pointer"
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

      {/* Image Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all cursor-pointer z-10"
            >
              <X size={20} />
            </button>
            <img
              src={previewImage}
              alt="Xem ảnh phóng to"
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};
