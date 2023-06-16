import { useEffect } from "react";

export const useDebounce = <T>(callback: () => void, dependences: T[] = [], delay = 1500) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
};
