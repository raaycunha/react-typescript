import axios from "axios";
import { useCallback, useState } from "react";
import type { User, UserRepository } from "../types/User";

export const useFinder = () => {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const showError = () => setError(true);
  const clearError = () => setError(false);
  const requestApi = useCallback(
    async <T>(url: string): Promise<T | undefined> => {
      try {
        setIsLoading(true);
        const apiKey = `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`;
        const response = await axios.get(url, {
          headers: {
            Authorization: apiKey,
          },
        });
        return response.data;
      } catch (err) {
        console.error("Erro API:", err);
        showError();
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );
  const getUser = useCallback(
    (user: string) => requestApi<User>(`https://api.github.com/users/${user}`),
    [requestApi],
  );
  const getRepository = useCallback(
    (user: string) =>
      requestApi<UserRepository[]>(
        `https://api.github.com/users/${user}/repos`,
      ),
    [requestApi],
  );
  return {
    getUser,
    getRepository,
    isLoading,
    error,
    showError,
    clearError,
  };
};
