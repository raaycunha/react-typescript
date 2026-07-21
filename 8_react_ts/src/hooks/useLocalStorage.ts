import { useState } from "react";

interface LocalStorageProps<T> {
  key: string;
  initialValue: T;
}

const useLocalStorage = <T>({ key, initialValue }: LocalStorageProps<T>) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : initialValue
  })
  const setValue = (value: T) => {
    setStoredValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }
  return [storedValue, setValue] as const;
}

export default useLocalStorage