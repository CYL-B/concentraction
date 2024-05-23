/*Custom sessionStorage hook*/
import { useState, useEffect } from "react";

export const useSessionStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
