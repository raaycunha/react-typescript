import { useState } from "react";

export const useAlbum = () => {
  const [error, setError] = useState<boolean>(false);
  const requestApi = async (searchUser: string) => {};
  return {
    requestApi,
    error,
    setError,
  };
};
