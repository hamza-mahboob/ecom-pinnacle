"use client"

import React from "react";
import Image from "next/image";
import ourValuesBg from "../app/public/imgs/ourValuesBg.png";
import iconBox from "../app/public/imgs/Icon-Box.png";
import NumberTicker from "@/components/ui/number-ticker";


export default function OurValues() {

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

        <div className="flex flex-col lg:flex-row items-center lg:justify-around py-[96px]">
          <div className="flex flex-col mb-28 lg:mb-0 gap-32 text-center lg:text-start">
            <div className="w-full lg:w-[560px] ">
              <h1 className="font-semibold text-5xl leading-relaxed mb-[16px]">
                Our Values that Drive Digital Marketing
              </h1>
              <p className="py-5">
                Et et id laoreet ultricies elementum venenatis ornare.
                Sollicitudin mauris id aliquet magna adipiscing. In lorem lacus
                quis egestas tincidunt neque ut accumsan.
              </p>
            </div>
            <div className="flex flex-col md:flex-row mx-auto lg:mx-0 gap-24">
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-semibold">
                <NumberTicker value={7} decimalPlaces={0} />
                  M+
                </h1>
                <p>Monthly Visits</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-semibold">
                <NumberTicker value={12} decimalPlaces={0} />
                +
                </h1>
                <p>Languages</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-semibold">
                <NumberTicker value={3.1} decimalPlaces={1} />
                M
                </h1>
                <p>Social Followers</p>
              </div>
            </div>

            <h1>
              Say Hi!{" "}
              <span className="text-secondaryColor">+1 (333) 000-0000</span>
            </h1>
          </div>

          <div>
            <Image src={iconBox} alt="Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
