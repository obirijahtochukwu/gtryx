import React from "react";
import Header from "./../../layout/header";
import OurService from "./our-service";
import OurTopService from "./our-top-service";
import Items from "./items";

export default function Page() {
  return (
    <article className="">
      <Header />
      <OurService />
      <OurTopService />
      <Items />
    </article>
  );
}
