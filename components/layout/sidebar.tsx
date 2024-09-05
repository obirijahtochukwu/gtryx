import React from "react";
import { Icons } from "../shared/icons";
import { pages } from "./mock-data";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <section
      className={`${
        isOpen ? " w-72" : "w-[90px]"
      } h-[calc(100vh-72px)] bg-white sticky top-[72px] flex flex-col gap-5 py-4 px-6 overflow-y-auto overflow-x-hidden duration-300`}
    >
      {pages.map(({ Icon, label }, idx) => (
        <div
          key={idx}
          className=" flex items-center gap-4 text-sm font-medium  duration-300 cursor-pointer capitalize text-black/40 hover:text-primary"
        >
          <Icon className=" w-5 h-5" />
          {isOpen && (
            <div className="hover:text-primary text-black whitespace-nowrap">
              {label}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

const list = Array(100).fill({
  Icon: Icons.user,
  label: "Active Subscriptions",
});
