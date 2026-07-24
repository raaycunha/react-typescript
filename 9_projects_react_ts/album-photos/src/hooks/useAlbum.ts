import axios from "axios";
import { useState } from "react";
import type { Photo } from "../types/AlbumTypes";

export const useAlbum = () => {
  const [imageClick, setImageClick] = useState<Photo | null>(null);
  const isActive = imageClick !== null;
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const requestApi = async (searchUser: string) => {
    try {
      setIsLoading(true);
      const URL = "https://api.pexels.com/v1/search";
      const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
      const response = await axios.get(URL, {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          query: searchUser,
          per_page: 16,
          page: 1,
        },
      });
      setPhotos(response.data.photos);
    } catch (err) {
      console.error("ERRO API:", err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    requestApi,
    error,
    setError,
    photos,
    isActive,
    imageClick,
    setImageClick,
    isLoading,
  };
};
