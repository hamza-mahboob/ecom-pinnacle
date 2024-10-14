import Image from "next/image";
import hero from "./public/imgs/hero.png";
import { Button } from "@/components/ui/button";
import Accordian from "../components/ui/Accordian";
import topRightVector from "./public/imgs/top-right-vector.png";
import ctaImg from "./public/imgs/CTA-Banner.png";
import ctaImg2 from "./public/imgs/CTA-Banner-2.png";
import aboutUs from "./public/imgs/about-us.png";
import MyCarousel from "../components/ui/MyCarousel";
import BlogCard from "@/components/BlogCard";
import blogImg1 from "./public/imgs/blog-img-1.png";
import blogImg2 from "./public/imgs/blog-img-2.png";
import blogImg3 from "./public/imgs/blog-img-3.png";
import c1p1 from "./public/imgs/c1p1.png";
import gridImg1 from "./public/imgs/gridImg1.png";
import gridImg2 from "./public/imgs/gridImg2.png";
import gridImg3 from "./public/imgs/gridImg3.png";
import gridImg4 from "./public/imgs/gridImg4.png";
import gridImg5 from "./public/imgs/gridImg5.png";
import gridImg6 from "./public/imgs/gridImg6.png";
import gridImg7 from "./public/imgs/gridImg7.png";
import gridImg8 from "./public/imgs/gridImg8.png";
import accordianPic from "./public/imgs/accordianPic.png";
import OurValues from "@/components/OurValues";

export default function Home() {
  return (
    <>
      <section className="w-full mt-[15px] px-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center text-center lg:text-start">
            <div className="mt-[120px] w-[530px] order-2 lg:order-1">
              <h1 className="text-headingColor text-[87px] font-light leading-[1]">
                <span className="font-bold">We Help you</span> to grow your
                <span className="font-light"> Business</span>
              </h1>

              <div className="h-[12px] w-[310px] bg-secondaryColor -mt-4 mb-[27px] ml-20 lg:ml-0"></div>

              <p className="text-headingColor opacity-[66%]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              <Button className="rounded-3xl px-auto py-4 w-52 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px]">
                GET STARTED
              </Button>
            </div>
            <Image
              src={hero}
              alt="hero img"
              className="z-10 order-1 lg:order-2"
            />
          </div>
        </div>

        {/* Vector positioned at the top right */}
        <Image
          src={topRightVector}
          alt="Top Right Vector"
          className="absolute top-0 right-0 w-[300px] h-[367px] md:w-[689px] md:h-[651px] lg:w-[750px] lg:h-[700px] pointer-events-none z-0" // Adjust size as needed
        />
      </section>

      {/* CTA Section with background image */}
      <section
        className="flex flex-col lg:flex-row md:w-[700px] lg:w-[950px] xl:w-[1280px] h-[455px] mx-auto my-[120px] justify-around items-center text-center lg:text-start px-5 rounded-3xl bg-cover bg-center text-white"
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
          <Button className="w-[197px] h-[60px] mt-8 px-12 py-4 rounded-3xl bg-white text-black text-xl hover:bg-slate-200">
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
          <div className="h-[8px] w-[160px] bg-secondaryColor -mt-2 mb-[27px] ml-[370px] lg:ml-[660px]"></div>
          <div className="ml-80 mt-10">
            <MyCarousel
              images={[
                {
                  src: c1p1,
                  alt: "Carousel Image 1",
                  width: 1000,
                  height: 700,
                  myClass: "w-[80rem]",
                  basis: "md:basis-1/3 basis-1/4",
                },
                {
                  src: c1p1,
                  alt: "Carousel Image 1",
                  width: 1000,
                  height: 700,
                },
                {
                  src: c1p1,
                  alt: "Carousel Image 1",
                  width: 1000,
                  height: 700,
                },
                {
                  src: c1p1,
                  alt: "Carousel Image 1",
                  width: 1000,
                  height: 700,
                },
                // Add more images here
              ]}
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="w-full mt-[15px] px-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center text-center lg:text-start">
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

              <Button className="rounded-3xl px-auto py-4 w-52 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px]">
                EXPLORE MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Recent Work */}
      <section className="w-full mb-[120px] my-20">
        <div className=" ml-auto bg-[#FEEDD5] flex flex-col w-[100rem] text-center rounded-tl-[25rem] h-[42rem]">
          <div className="flex">
            <div className="flex flex-col -ml-40">
              <h1 className="text-headingColor text-start text-[48px] font-bold leading-[1] mt-[92px]">
                Our Recent Work
              </h1>
              <h1 className="text-headingColor text-start text-[48px] font-extralight leading-[1] z-10">
                By Our Experts
              </h1>
              <div className="h-[8px] w-[155px] bg-secondaryColor -mt-2 mb-[27px] ml-[10rem]"></div>
            </div>
            <div className="w-[32rem] ml-auto flex items-center justify-start text-start text-headingColor p-5 mt-16 mx-8">
              <h3>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </h3>
            </div>
          </div>

          <div className="ml-52 mt-20">
            <MyCarousel
              images={[
                {
                  src: c1p1,
                  alt: "Carousel Image 1",
                  width: 1000,
                  height: 700,
                  myClass: "w-[80rem]",
                  basis: "md:basis-2/5 basis-1/4",
                },
                {
                  src: c1p1,
                  alt: "Carousel Image 1",
                  width: 1000,
                  height: 700,
                },
                {
                  src: c1p1,
                  alt: "Carousel Image 1",
                  width: 1000,
                  height: 700,
                },
                {
                  src: c1p1,
                  alt: "Carousel Image 1",
                  width: 1000,
                  height: 700,
                },
                // Add more images here
              ]}
            />
          </div>
        </div>
      </section>

      {/* Our Values that Drive Digital Marketing */}
      <OurValues />

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
                text="Revamping the Membership Model with Triathlon Australia Together"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="w-full">
          <h1 className="text-center text-4xl my-20 font-semibold text-[#4D4D4D]">
            Our clients success stories
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[65rem] gap-y-5 place-items-center">
            <Image src={gridImg1} alt="grid image" />
            <Image src={gridImg2} alt="grid image" />
            <Image src={gridImg3} alt="grid image" />
            <Image src={gridImg4} alt="grid image" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 place-items-center w-full p-5 gap-2 mx-auto my-20">
            <Image src={gridImg5} alt="grid image" />
            <Image src={gridImg6} alt="grid image" />
            <Image src={gridImg7} alt="grid image" />
            <Image src={gridImg8} alt="grid image" />
            <Image src={gridImg5} alt="grid image" />
            <Image src={gridImg6} alt="grid image" />
            <Image src={gridImg7} alt="grid image" />
            <Image src={gridImg8} alt="grid image" />
          </div>
        </div>
      </section>

      {/* Accordian */}
      <section>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mx-auto">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mb-10">
              Frequently Asked Questions
            </h1>
            <div className="max-w-[35rem]">
              <Accordian />
            </div>
          </div>
          <Image src={accordianPic} alt="Accordian Pic" />
        </div>
      </section>

      {/* CTA Section 2 with background image */}
      <section
        className="flex flex-row md:w-[700px] lg:w-[950px] xl:w-[1280px] h-[455px] mx-auto my-[120px] justify-between px-5 rounded-3xl"
        style={{
          backgroundImage: `url(${ctaImg2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="md:text-[30px] lg:text-[42px] font-semibold text-center mt-28">
            JOIN THE THRIVING ECOMMERCE ECOSYSTEM AND ACCESS LIMITLESS
            OPPORTUNITIES
          </h1>
          <p>Connect with Our Experienced Advisors Today!</p>
          <Button className="rounded-3xl px-auto py-4 w-56 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px]">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
