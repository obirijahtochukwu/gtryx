import React from "react";
import { items } from "./mock-data";
import SlideToTop from "@/shared/slideToTop";

export default function Items() {
  return (
    <div className="bg-white ">
      <article className="pb-12 max-w-3xl mx-auto">
        {items.map(({ title, desc, Icon }, idx) => (
          <SlideToTop
            key={idx}
            classname=" grid grid-cols-12 items-center justify-between"
          >
            <>
              <section className={`${idx == 1 && "order-2"} col-span-6`}>
                <div className=" text-4xl tracking-wider font-bold text-primary">
                  {title}
                </div>
                <div className=" text-xl font-medium">{desc}</div>
                <button className=" bg-primary text-white h-14 w-36 flex items-center justify-center rounded-lg shadow-md text-lg font-bold">
                  Read More
                </button>
              </section>
              <aside className={`${idx == 1 && "order-1"} col-span-6`}>
                <Icon className="w-full h-full" />
              </aside>
            </>
          </SlideToTop>
        ))}
      </article>
    </div>
  );
}
