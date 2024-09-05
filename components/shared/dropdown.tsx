import React, { useRef, useState } from "react";
import { useClickOut } from "./../../hooks/useclickOut";

interface props {
  className?: string;
  children: JSX.Element;
}

export default function dropdown() {
  const { targetRef } = useClickOut();
  const [isOpen, setIsOpen] = useState(false);

  const DropdownMenuItem = ({ className, children }: props) => {
    return (
      <div
        className={`${className} py-1.5 font-medium px-4 text-sm cursor-pointer hover:bg-gray duration-200`}
      >
        {children}
      </div>
    );
  };

  const DropdownMenuContent = ({ className, children }: props) => (
    <div
      ref={targetRef}
      style={{ transition: "transform 0.4s ease" }}
      onClick={() => setIsOpen(!isOpen)}
      className={`${className} group-hover:visible group-hover:opacity-100 scale-50 group-hover:scale-100 invisible opacity-0 duration-500 origin-right bg-white absolute right-0 top-full shadow-box z-10 overflow-x-hidden p-2 rounded-lg`}
    >
      {children}
    </div>
  );

  const DropdownMenuButton = ({
    className,
    children,
  }: {
    className?: string;
    children: JSX.Element;
  }) => (
    <div
      onMouseOver={() => setIsOpen(true)}
      className={`${className} w-fit cursor-pointer`}
    >
      {children}
    </div>
  );

  const DropdownMenu = ({
    className,
    children,
  }: {
    className?: string;
    children: JSX.Element;
  }) => (
    <div className={`${className} relative ${isOpen ? "group" : ""}`}>
      {children}
    </div>
  );
  return {
    DropdownMenu,
    DropdownMenuButton,
    DropdownMenuContent,
    DropdownMenuItem,
  };
}
