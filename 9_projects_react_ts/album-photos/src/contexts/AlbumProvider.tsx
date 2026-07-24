import { createContext, useContext } from "react";
import { useAlbum } from "../hooks/useAlbum";
import type { AlbumContextProps, AlbumContextType } from "../types/AlbumTypes";

const AlbumContext = createContext<AlbumContextType | null>(null);

export const AlbumContextProvider = ({ children }: AlbumContextProps) => {
  const album = useAlbum();
  return (
    <AlbumContext.Provider value={album}>{children}</AlbumContext.Provider>
  );
};

export const useAlbumContext = () => {
  const context = useContext(AlbumContext);
  if (!context) {
    throw new Error(
      "useAlbumContext deve ser usado dentro de um AlbumContextProvider",
    );
  } else return context;
};
