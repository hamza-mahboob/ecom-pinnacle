import Image from "next/image";
import hero from "./public/imgs/hero.png";
import { Button } from "@/components/ui/button";
import topRightVector from "./public/imgs/top-right-vector.png";
import ctaImg from "./public/imgs/CTA-Banner.png";
import ctaImg2 from "./public/imgs/CTA-Banner-2.png";
import aboutUs from "./public/imgs/about-us.png";
import MyCarousel from "../components/ui/MyCarousel";
import eclipseCta from "./public/imgs/eclipse-cta.png";
import BlogCard from "@/components/BlogCard";
import blogImg1 from "./public/imgs/blog-img-1.png";
import blogImg2 from "./public/imgs/blog-img-2.png";
import blogImg3 from "./public/imgs/blog-img-3.png";

export default function Home() {
  return (
    <>
      <section className="w-full mt-[15px] px-5">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between">
            <div className="mt-[120px] w-[530px]">
              <h1 className="text-headingColor text-[87px] font-light leading-[1]">
                <span className="font-bold">We Help you</span> to grow your
                <span className="font-light"> Business</span>
              </h1>

              <div className="h-[12px] w-[310px] bg-secondaryColor -mt-4 mb-[27px]"></div>

              <p className="text-headingColor opacity-[66%]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              <Button className="rounded-xl px-auto py-4 w-52 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px]">
                GET STARTED
              </Button>
            </div>
            <Image src={hero} alt="hero img" className="z-10" />
          </div>
        </div>

        {/* Vector positioned at the top right */}
        <Image
          src={topRightVector}
          alt="Top Right Vector"
          className="absolute top-0 right-0 w-[750px] h-[700px] pointer-events-none" // Adjust size as needed
        />
      </section>

      {/* CTA Section with background image */}
      <section
        className="flex w-[1200px] mx-auto my-[120px] p-14 h-[371px] bg-cover bg-center items-center justify-between text-white"
        style={{ backgroundImage: `url(${ctaImg.src})` }}
      >
        <div className="text-center ">
          <h2 className="text-[64px] w-[393px]">Elevate Your Brand Today!</h2>
        </div>

        <div className="w-[483px] ">
          <p className="mt-4 text-lg">
            Ready to transform your digital dresence? Let's create magic
            together! book our services now!
          </p>
          <Button className="w-[197px] h-[60px] mt-8 px-12 py-4 rounded-full bg-white text-black text-xl hover:bg-slate-200">
            Book Call
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="w-full mb-[120px]">
        <div className="container mx-auto bg-[#FEEDD5] flex flex-col text-center rounded-tr-full h-[578px]">
          <h1 className="text-headingColor text-[48px] font-bold leading-[1] mt-[92px]">
            What We Do
          </h1>
          <h1 className="text-headingColor text-[48px] font-light leading-[1] z-10">
            For Your Business
          </h1>
          <div className="h-[8px] w-[160px] bg-secondaryColor -mt-2 mb-[27px] ml-[660px]"></div>
          <div className="ml-80 mt-10">
            <MyCarousel />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="w-full mt-[15px] px-5">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between">
            <Image src={aboutUs} alt="about us img" className="z-10" />
            <div className="mt-[120px] w-[530px]">
              <h1 className="text-headingColor text-[48px] font-bold leading-[1]">
                About Us
              </h1>
              <h1 className="text-headingColor text-[48px] font-light leading-[1] mb-[22px]">
                Fake or Real
              </h1>

              <p className="text-headingColor opacity-[66%] mb-[9px]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              <p className="text-headingColor opacity-[66%]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              <Button className="rounded-xl px-auto py-4 w-52 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px]">
                EXPLORE MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="w-full my-[120px] px-5">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold text-[#4D4D4D] text-4xl">
              Caring is the new marketing
            </h1>
            <p className="text-[#717171] w-[628px] text-center">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </p>
            <div className="flex flex-row gap-4">
              <BlogCard
                img={blogImg1}
                text="Creating Streamlined Safeguarding Processes with OneRen"
              />
              <BlogCard
                img={blogImg2}
                text="What are your safeguarding responsibilities and how can you manage them?"
              />
              <BlogCard
                img={blogImg3}
                text="Revamping the Membership Model with Triathlon Australia"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 with background image */}
      <section
        className="flex flex-row w-[1200px] h-[455px] mx-auto my-[120px] justify-between px-5"
        style={{ backgroundImage: `url(${ctaImg2.src})` }}
      >
        <div className="flex flex-col w-[520px] ml-[79px] mt-[90px] text-white ">
          <h1 className="text-[56px] font-normal mb-[50px]">
            Start Your Journey With Us Now
          </h1>
          <Button className="rounded-full px-auto py-4 w-52 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[24px] text-white">
            Start Now
          </Button>
        </div>
        <Image
          src={eclipseCta}
          alt="eclipse CTA"
          className="my-[52px] mx-[87px]"
        />
      </section>

      {/* Vector positioned at the top right */}
      <Image
        src={topRightVector}
        alt="Top Right Vector"
        className="absolute top-0 right-0 w-[750px] h-[700px] pointer-events-none" // Adjust size as needed
      />
    </>
  );
}
