import axios from "axios";
import { useState } from "react";
import type { Photo } from "../types/AlbumTypes";

export const useAlbum = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<boolean>(false);
  const requestApi = async (searchUser: string) => {
    try {
      const URL = "https://api.pexels.com/v1/search";
      const API_KEY =
        "l3cMeqdhRjS5vq5cPocDTNWXaSG6EnwuBE3OfMc6fkwSYUQnIilD84r2";
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
    }
  };
  return {
    requestApi,
    error,
    setError,
    photos,
  };
};
