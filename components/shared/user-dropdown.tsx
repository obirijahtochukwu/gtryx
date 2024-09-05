import React from "react";
import dropdown from "./dropdown";
import { Icons } from "./icons";

export default function UserDropdown() {
  const { DropdownMenu, DropdownMenuButton, DropdownMenuContent } = dropdown();

  return (
    <DropdownMenu className="">
      <>
        <DropdownMenuButton className=" flex items-center pb-4 gap-3">
          <>
            <img
              src="https://writing.writeopenly.com/uploads/profiles/2cdf9b4ab572a1f6e6bb4884824e05e6.jpg"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <Icons.dropdown />
          </>
        </DropdownMenuButton>
        <DropdownMenuContent className=" w-72 text-sm font-medium !p-0">
          <>
            <div className="p-3 pb-0">
              <div className=" flex items-center gap-3 p-3 rounded-lg bg-gray">
                <img
                  src="https://writing.writeopenly.com/uploads/profiles/2cdf9b4ab572a1f6e6bb4884824e05e6.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                Super Admin
              </div>
            </div>
            <div className="flex items-center gap-2 my-2 py-2 px-6 cursor-pointer hover:px-8 duration-200 hover:bg-lightblue">
              <Icons.user color="#00AAFF" className=" w-5 h-5" /> Profile
            </div>
            <div className=" flex items-center justify-center gap-3 py-5 bg-gray cursor-pointer">
              <Icons.logout className=" w-5 h-5" /> Signout
            </div>
          </>
        </DropdownMenuContent>
      </>
    </DropdownMenu>
  );
}
