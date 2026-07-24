import { CircleX } from "lucide-react";
import { useEffect } from "react";
import { useAlbumContext } from "../../contexts/AlbumProvider";
import type { Photo } from "../../types/AlbumTypes";

const Hero = () => {
  const { photos, isActive, imageClick, setImageClick } = useAlbumContext();
  const handleImageClick = (img: Photo) => {
    setImageClick(img);
  };
  useEffect(() => {
    if (isActive) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);
  return (
    <div>
      {imageClick && (
        <div
          onClick={() => setImageClick(null)}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/85 shadow-lg shadow-red"
        >
          <button
            aria-label="Fechar imagem"
            className="absolute top-5 right-5 text-red-600 cursor-pointer z-51 hover:text-red-400"
            onClick={() => setImageClick(null)}
          >
            <CircleX size={30} />
          </button>
          <img
            onClick={(e: React.MouseEvent<HTMLImageElement>) =>
              e.stopPropagation()
            }
            className="w-full max-w-50 h-auto rounded-2xl shadow-2xl md:max-w-100 lg:max-w-150"
            src={imageClick.src.large2x}
            alt={imageClick.alt || "Imagem da Pexels"}
            loading="lazy"
          />
        </div>
      )}
      <div className="flex justify-center flex-wrap gap-4 px-4 py-8">
        {photos.map((photo: Photo) => (
          <img
            onClick={() => handleImageClick(photo)}
            className={`w-full max-w-110 h-auto rounded-2xl shadow-2xl cursor-pointer transition-transform duration-400 ${isActive ? "" : "hover:scale-[1.05]"}`}
            key={photo.id}
            src={photo.src.landscape}
            alt={photo.alt || "Imagem da Pexels"}
            loading="lazy"
            width={photo.width}
            height={photo.height}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
