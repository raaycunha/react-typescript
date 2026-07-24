import type { Dispatch, ReactNode, SetStateAction } from "react";

interface PhotoSrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSrc;
  liked: boolean;
  alt: string;
}

export type AlbumContextProps = { children: ReactNode };

export interface AlbumContextType {
  photos: Photo[];
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
  requestApi: (searchUser: string) => Promise<void>;
  isActive: boolean;
  imageClick: Photo | null;
  setImageClick: (value: Photo | null) => void;
  isLoading: boolean;
}
