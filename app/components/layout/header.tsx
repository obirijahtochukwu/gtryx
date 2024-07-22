import React from "react";
import { Icons } from "../shared/icons";

export default function Header() {
  return (
    <nav className="2xl:px-20 px-10 pt-5 flex items-center gap-4 font-bold text-base tracking-wider">
      <Icons.logo />
      <section className=" ml-24 mr-auto flex items-center gap-8 text-black">
        {links.map((name, idx) => (
          <div key={idx} className=" cursor-pointer">
            {name}
          </div>
        ))}
      </section>
      {["All", "Support"].map((name, idx) => (
        <div
          key={idx}
          className=" bg-primary text-white p-2 rounded-lg cursor-pointer"
        >
          {name}
        </div>
      ))}
    </nav>
  );
}

const links = ["Home", "Pages", "Careers", "Blog", "Contact Us"];
