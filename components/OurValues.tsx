"use client"

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import ourValuesBg from "../app/public/imgs/ourValuesBg.png";
import iconBox from "../app/public/imgs/Icon-Box.png";

export default function OurValues() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when half of the section is visible
  });

  return (
    <section
      className="w-full relative"
      style={{
        backgroundImage: `url(${ourValuesBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center lg:justify-around py-[96px]">
          <div className="flex flex-col mb-28 lg:mb-0 gap-32 text-center lg:text-start">
            <div className="w-[560px] ">
              <h1 className="font-semibold text-5xl leading-relaxed mb-[16px]">
                Our Values that Drive Digital Marketing
              </h1>
              <p>
                Et et id laoreet ultricies elementum venenatis ornare.
                Sollicitudin mauris id aliquet magna adipiscing. In lorem lacus
                quis egestas tincidunt neque ut accumsan.
              </p>
            </div>
            <div className="flex flex-row gap-24">
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-semibold">
                  {inView ? (
                    <CountUp
                    start={0}
                    end={7}
                    decimals={0}
                    duration={4}
                    separator=","
                    suffix="M +"
                  />
                  ) : (
                    "0"
                  )}
                </h1>
                <p>Monthly Visits</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-semibold">
                  {inView ? <CountUp end={12} duration={4} suffix="+" /> : "0"}
                </h1>
                <p>Languages</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-semibold">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={3.1}
                      decimals={1}
                      duration={4}
                      separator=","
                      suffix=" M"
                    />
                  ) : (
                    "0"
                  )}
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
