import React from "react";
import dropdown from "./dropdown";
import { langs } from "./mock-data";

export default function LanguageSetting() {
  const { DropdownMenu, DropdownMenuButton, DropdownMenuContent } = dropdown();

  return (
    <DropdownMenu className=" pb-4 ml-auto">
      <>
        <DropdownMenuButton>
          <img
            src="https://writing.writeopenly.com/uploads/language/united-states.png"
            alt=""
            className="ml-auto w-8 h-8"
          />
        </DropdownMenuButton>
        <DropdownMenuContent className=" w-48">
          <>
            <div className="text-sm font-semibold">Set Output Language</div>
            <section className=" mt-1">
              {langs.map(({ img, name }, idx) => (
                <div
                  key={idx}
                  className=" flex items-center text-base gap-3 pl-3 py-2 font-light hover:bg-lightblue rounded-lg cursor-pointer duration-300"
                >
                  <img src={img} alt="" className=" w-6 h-6" /> {name}
                </div>
              ))}
            </section>
          </>
        </DropdownMenuContent>
      </>
    </DropdownMenu>
  );
}
