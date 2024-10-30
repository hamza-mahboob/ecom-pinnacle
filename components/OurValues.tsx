"use client"

import React from "react";
import Image from "next/image";
import ourValuesBg from "../app/public/imgs/ourValuesBg.png";
import iconBox from "../app/public/imgs/Icon-Box.png";
import NumberTicker from "@/components/ui/number-ticker";
import wave from '../app/public/imgs/wave.png'


export default function OurValues() {

  const values = [
    { title: "Growth Strategy", description: "Ecom Pinnacle drives sustainable, high-impact growth with tailored, data-driven strategies focused on long term success." },
    { title: "Results Integrity", description: "Our commitment to transparency and accountability ensures measurable, ROI-driven outcomes aligned with client goals." },
    { title: "Team Agility", description: " Our skilled, adaptable team quickly responds to industry shifts, delivering innovative solutions that meet evolving business needs." },
  ];

  return (
    <section
      className="w-full relative p-3"
      style={{
        backgroundImage: `url(${ourValuesBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto relative z-10">

        <div className="flex flex-col xl:flex-row items-center lg:justify-around py-[96px]">
          <div className="flex flex-col mb-28 lg:mb-0 gap-32 text-center lg:text-start">
            <div className="w-full lg:w-[560px] ">
              <h1 className="font-semibold text-5xl leading-relaxed mb-[16px]">
                Best ROIs
              </h1>
              <p className="py-5">
                We are dedicated to provide
                maximum benefits to our
                clients with seamless
                strategies and best
                investment options.
              </p>
            </div>
            <div className="flex flex-col md:flex-row mx-auto lg:mx-0 gap-24 container items-center">
              <div className="flex flex-col gap-2 w-60">
                <h1 className="text-3xl font-semibold">
                  $
                  <NumberTicker value={5573440} decimalPlaces={0} />
                </h1>
                <p>Generated In Revenue For Our Client (So Far)</p>
              </div>
              <div className="flex flex-col gap-2 w-60">
                <h1 className="text-3xl font-semibold">
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div>
                      Over 
                    </div>
                    <div>
                      $<NumberTicker value={1557300} decimalPlaces={0} />
                    </div>
                  </div>
                </h1>
                <p>Spent On Google & Facebook Advertising</p>
              </div>
              <div className="flex flex-col gap-2 w-60">
                <h1 className="text-3xl font-semibold">
                  <NumberTicker value={650} decimalPlaces={0} />
                  +
                </h1>
                <p>Successful Stores Created, Deployed, Scaled</p>
              </div>
            </div>

            <h1>
              Say Hi!{" "}
              <span className="text-secondaryColor">+1 (333) 000-0000</span>
            </h1>
          </div>

          {/* <div>
            <Image src={iconBox} alt="Icon" />
          </div> */}
          <div className="flex flex-col opacity-95">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-lg shadow-sm w-80 h-52"
              >
                <Image src={wave} alt="Wave icon" width={40} height={40} className="rounded-full mb-16" />
                <div className="flex flex-col gap-5">
                  <h2 className="text-2xl font-medium text-titleColor">{value.title}</h2>
                  <p className="text-md font-medium text-textColor">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
