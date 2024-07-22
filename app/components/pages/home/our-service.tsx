import React, { useState } from "react";
import { services } from "./mock-data";
import SlideToTop from "@/shared/slideToTop";

export default function OurService() {
  return (
    <article className="pt-20 pb-12 max-w-3xl mx-auto">
      <SlideToTop classname=" text-4xl font-bold text-center tracking-wider">
        <>
          Our <span className=" text-primary">Services</span>
        </>
      </SlideToTop>
      <SlideToTop classname="mt-1 text-base font-bold text-center text-black/60 mb-12">
        <>We Provide Perfect IT Solutions for Your Business</>
      </SlideToTop>
      <SlideToTop classname=" grid grid-cols-12 gap-5">
        <>
          {services.map(({ title, desc, Icon }, idx) => (
            <main
              key={idx}
              className="shadow-md rounded-lg col-span-3 bg-white relative z-10 group overflow-hidden hover:shadow-2xl hover:text-white"
            >
              <div className="w-full h-36 flex justify-center items-center">
                <Icon className="w-auto h-auto" />
              </div>
              <div className="text-xs font-bold tracking-wide z-10 text-center">
                {title}
              </div>
              <div className="text-center text-xs opacity-80 font-medium pt-0 p-2">
                {desc}
              </div>
              <section className=" absolute bg-primary group-hover:h-full h-0 duration-300 w-full bottom-0 left-0 -z-10"></section>
            </main>
          ))}
        </>
      </SlideToTop>
    </article>
  );
}
