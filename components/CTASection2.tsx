import React from 'react'
import ctaImg2 from "./public/imgs/CTA-Banner-2.png";

export default function CTASection2() {
  return (
    <section
        className="flex flex-row w-[1280px] h-[455px] mx-auto my-[120px] justify-between px-5 rounded-3xl"
        style={{
          backgroundImage: `url(${ctaImg2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-[42px] font-semibold text-center mt-28">
          JOIN THE THRIVING ECOMMERCE ECOSYSTEM AND ACCESS LIMITLESS
          OPPORTUNITIES
        </h1>
      </section>
  )
}