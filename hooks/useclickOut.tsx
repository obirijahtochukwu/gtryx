import { useEffect, useRef, useState } from "react";

export const useClickOut = () => {
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const close = (e: any) => {
      if (targetRef.current && !targetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [targetRef]);

  return {
    isOpen,
    setIsOpen,
    targetRef,
  };
};
