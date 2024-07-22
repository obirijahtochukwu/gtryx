"use client";
import React, { useEffect, useRef, useState } from "react";

export default function SlideToTop({
  text,
  classname,
  children,
}: {
  text?: string;
  classname?: string;
  children?: JSX.Element;
}) {
  const placeholder = useScrollView();

  return (
    <div
      ref={placeholder.targetRef}
      className={`${
        placeholder.isVisible ? "slide-top" : "invisible"
      } ${classname}`}
    >
      {text}
      {children}
    </div>
  );
}

export const useScrollView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]: any) => {
      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting);
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      console.log("");
    };
  }, []);

  return {
    isVisible,
    targetRef,
  };
};
