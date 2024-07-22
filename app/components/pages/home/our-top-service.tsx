"use client";
import React, { useRef } from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import { top_services } from "./mock-data";
import SlideToTop from "@/shared/slideToTop";

export default function OurTopService() {
  const ref = useRef<HTMLDivElement | any>(null);

  const next = (currentItem: any, nextItem: any) => {
    if (currentItem.index === nextItem.index) {
      ref.current.goTo(0);
    }
  };
  const prev = (currentItem: any, nextItem: any) => {
    if (currentItem.index === nextItem.index) {
      ref.current.goTo(top_services.length);
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 5 },
  ];

  return (
    <article className="bg-white py-12 px-5">
      <SlideToTop classname=" text-4xl font-bold text-center tracking-wider">
        <>
          Our Top <span className=" text-primary">Services</span>
        </>
      </SlideToTop>
      <SlideToTop classname="mt-1 text-base font-bold text-center text-black/60 mb-12">
        <>
          We ensure you have every functionality you need to build, run, and
          expand your marketplace
        </>
      </SlideToTop>

      <SlideToTop>
        <ReactElasticCarousel
          ref={ref}
          disableArrowsOnEnd={false}
          onNextStart={next}
          // showArrows={false}
          pagination={false}
          onPrevEnd={prev}
          breakPoints={breakPoints}
        >
          {[...top_services, ...top_services].map(
            ({ title, desc, Icon }, idx) => (
              <main
                key={idx}
                className="shadow-md rounded-lg bg-lightblue ml-3"
              >
                <div className="w-full h-36 flex justify-center items-center">
                  <Icon className="w-auto h-auto" />
                </div>
                <div className="text-xs font-bold tracking-wide text-center">
                  {title}
                </div>
                <div className="text-center text-xs text-black/80 font-medium pt-0 p-2">
                  {desc}
                </div>
              </main>
            )
          )}
        </ReactElasticCarousel>
      </SlideToTop>
    </article>
  );
}
