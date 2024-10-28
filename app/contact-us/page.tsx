"use client";
import Image from "next/image";
import React from "react";
import contactUs from "../public/imgs/contact-us-hero.png";
import mainIcon from "../public/imgs/contact-us-form-main-icon.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import ContactUsForm from "@/components/ContactUsForm";
import accordianPic from "../public/imgs/accordianPic.svg";
import Accordian from "../../components/ui/Accordian";
import Link from "next/link";

function page() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-secondaryColor my-20">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-[290px] md:h-[600px]">
            <Image src={contactUs} alt="Lets Talk" className="size-[260px] md:size-[550px]" />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full my-20 px-5 ">
        <div className="container mx-auto ">
          <div className="flex flex-col justify-center items-center">
            <Image src={mainIcon} alt="Main Icon" className="mb-[34px]" />
            <h1 className="font-[600] text-[32px] text-center">
              Let’s build something awesome together
            </h1>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap my-20 items-center gap-10 md:justify-center">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-[340px] h-[270px] bg-[#0E096B1A] rounded-2xl">
                <div className="w-[310px] h-[220px] bg-white rounded-2xl my-[25px] mx-auto">
                  <div className="flex flex-col gap-[17px] p-5">
                    <div className="flex justify-center items-center w-[123px] h-[44px] bg-secondaryColor rounded-full text-black font-[600] text-[20px]">
                      Contact
                    </div>
                    <div className="w-[280px] border border-solid border-[#ECECEC]"></div>

                    <div className="flex flex-row gap-3">
                      <div>
                        <MdOutlineEmail className="text-[28px] mt-1 text-[#5956E8]" />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-semibold text-[25px]">Email</h1>
                        <p>support@ecompinnacle.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[340px] h-[270px] bg-[#0E096B1A] rounded-2xl">
                <div className="w-[310px] h-[220px] bg-white rounded-2xl my-[25px] mx-auto">
                  <div className="flex flex-col gap-[17px] p-5">
                    <div className="flex justify-center items-center w-[123px] h-[44px] bg-secondaryColor rounded-full text-black font-[600] text-[20px]">
                      Call
                    </div>
                    <div className="w-[280px] border border-solid border-[#ECECEC]"></div>

                    <div className="flex flex-row gap-3">
                      <div>
                        <FaPhone className="text-[25px] mt-2 text-[#5956E8]" />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-semibold text-[25px]">Phone</h1>
                        <p>+44123456788</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[340px] h-[270px] bg-[#0E096B1A] rounded-2xl mt-5 md:mt-0">
              <div className="w-[310px] h-[220px] bg-white rounded-2xl my-[25px] mx-auto">
                <div className="flex flex-col gap-[17px] p-5">
                  <div className="flex justify-center items-center w-[123px] h-[44px] bg-secondaryColor rounded-full text-black font-[600] text-[20px]">
                    Office
                  </div>
                  <div className="w-[280px] border border-solid border-[#ECECEC]"></div>

                  <div className="flex flex-row gap-3">
                    <div>
                      <FaLocationDot className="text-[25px] mt-2 text-[#5956E8]" />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-[25px]">Location</h1>
                      <p>United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactUsForm />
          </div>
        </div>
      </section>

      {/* Offices */}
      {/* <section className="w-full my-20 px-5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap my-20 items-center md:justify-center gap-10">
            <div className="flex flex-col gap-3 md:w-[335px]">
              <h1 className="text-[31px] font-semibold">New York Office</h1>
              <p className="text-[#667085] text-[16px]">
                Velit nulla arcu in nibh lobortis laoreet proin sit. Sed nunc
                maecenas.
              </p>
              <div className="flex flex-row gap-2 items-center">
                <FaLocationDot className="text-secondaryColor" />
                <p className="text-[14px]">
                  Office 231, 85 Dunstall Hill, Wolverhampton, England, WV6 0SR
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineEmail className="text-secondaryColor" />
                <p className="text-[14px]">Newyork@lambe.com</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Accordian */}
      <section>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mx-auto p-5">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mb-10">
              Frequently Asked Questions
            </h1>
            <div className="max-w-[35rem]">
              <Accordian />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Image src={accordianPic} alt="Accordian Pic" />
            <h3 className=" text-right text-textColor">For More Information <Link className="hover:cursor-pointer hover:underline text-secondaryColor ml-2" href="tel:+447857153351">+447857153351</Link></h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
