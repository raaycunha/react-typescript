import { useAlbumContext } from "../../contexts/AlbumProvider";
import type { Photo } from "../../types/AlbumTypes";

const Hero = () => {
  const { photos } = useAlbumContext();
  console.log(photos);
  return (
    <div>
      {photos.map((photo: Photo) => (
        <img
          key={photo.id}
          src={photo.src.medium}
          alt={photo.alt || "Imagem da Pexels"}
        />
      ))}
    </div>
  );
};

export default Hero;
