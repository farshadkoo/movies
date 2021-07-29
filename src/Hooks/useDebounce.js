import { useState, useEffect } from "react";

export default function useDebounsce(value, delay) {
  const [debounsceValue, setDebounsceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounsceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounsceValue;
}
