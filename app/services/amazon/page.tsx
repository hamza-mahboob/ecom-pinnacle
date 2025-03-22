"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import img from "../../public/imgs/service-hero.svg";
import timelineImg1 from "../../public/imgs/planning pic 1.jpg";
import timelineImg12 from "../../public/imgs/research-2.svg";
import timelineImg13 from "../../public/imgs/research-3.svg";
import timelineImg14 from "../../public/imgs/research-4.svg";
import timelineImg21 from "../../public/imgs/fulfillment1.png";
import timelineImg22 from "../../public/imgs/fulfillment2.svg";
import timelineImg23 from "../../public/imgs/fulfillment3.svg";
import timelineImg24 from "../../public/imgs/fulfillment4.svg";
import timelineImg3 from "../../public/imgs/planning pic 3.jpg";
import timelineImg32 from "../../public/imgs/management2.svg";
import timelineImg33 from "../../public/imgs/management3.svg";
import timelineImg34 from "../../public/imgs/management4.svg";
import timelineImg41 from "../../public/imgs/optimization1.svg";
import timelineImg42 from "../../public/imgs/optimization2.svg";
import timelineImg43 from "../../public/imgs/optimization3.svg";
import timelineImg44 from "../../public/imgs/optimization4.svg";
import amazonLogo from "../../public/imgs/amazon-service.png";
import amazonLogo2 from "../../public/imgs/product-listing-and-inventory-management.png";
import amazonLogo3 from "../../public/imgs/marketing-seo.png";
import amazonLogo4 from "../../public/imgs/customer-support-and-engagement.png";
import blur from "../../public/imgs/Blur.svg";
import chart from "../../public/imgs/chart-column-grow.webp.svg";
import returns from "../../public/imgs/investment-returns.webp.svg";
import ctaImg2 from "../../public/imgs/CTA-Banner-2.png";
import { Timeline } from "@/components/ui/timeline";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Testimonial from "@/components/Testimonial";
import PricingPage from "@/components/ui/pricing-plans";
import Link from "next/link";

export default function page() {
  const data = [
    {
      title: "Research",
      content: (
        <div>
          <p className="text-gray-900 dark:text-gray-200 text-xs md:text-xl font-normal mb-8">
            We identify profitable products with high demand and low
            competition, then source them directly from qualified brand
            wholesalers.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={timelineImg1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg12}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg13}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg14}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fulfillment",
      content: (
        <div>
          <p className="text-gray-900 dark:text-gray-200 text-xs md:text-xl font-normal mb-8">
            We manage order fulfillment through Amazon FBA, ensuring timely
            deliveries and excellent customer support.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={timelineImg21}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-center h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg22}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-contain object-center h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg24}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-center h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg23}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-contain object-center h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Management",
      content: (
        <div>
          <p className="text-gray-900 dark:text-gray-200 text-xs md:text-xl font-normal mb-4">
            We handle all aspects of inventory management, including product
            acquisition, storage, and shipment to Amazon fulfillment centers.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={timelineImg3}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg32}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg33}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg34}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Optimization",
      content: (
        <div>
          <p className="text-gray-900 dark:text-gray-200 text-xs md:text-xl font-normal mb-4">
            Our experts create optimized product listings that showcase your
            products effectively and drive conversions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={timelineImg41}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg42}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg43}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg44}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  const content = [
    {
      title: "Store creation",
      description:
        "Setting up a profitable store that meets its customers’ needs is the first step in dominating the market. We, at ECOM PINNACLE handle everything from product listings to brand visibility for your store. To generate leads we offer analytics, store management, customization and optimization that matches your goals.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={amazonLogo}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Amazon store setup"
          />
        </div>
      ),
    },
    {
      title: "FBA Automation on Amazon",
      description:
        "Boost your business with competent Amazon FBA automation services. Everything from inventory control to order packing, shipping, tracking, monitoring and Amazon price adjustment is handled by ECOM PINNACLE.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={amazonLogo}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Amazon store setup"
          />
        </div>
      ),
    },
    {
      title: "Product listing and content on Amazon",
      description:
        "Product hunting with intention and creative content gets you noticed on Amazon. To build your brand presence and authority, we use product hunting techniques, multimedia and content writing to showcase your product with Amazon automation.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={amazonLogo}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Amazon store setup"
          />
        </div>
      ),
    },
    {
      title: "Product Sourcing & Negotiation",
      description:
        "Our team of sourcing specialists leverages its extensive network of reputable brand wholesalers to find the best possible deals on the products you choose to sell. We negotiate on your behalf to secure the most competitive wholesale pricing and favorable terms, maximizing your profit potential.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={amazonLogo}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Amazon store setup"
          />
        </div>
      ),
    },
    {
      title: "Inventory Management & Replenishment",
      description:
        "We take the burden of inventory management off your shoulders. Our meticulous planning ensures you have the right amount of stock to meet customer demand without incurring unnecessary storage fees. Our automated inventory replenishment system constantly monitors your stock levels and triggers replenishment orders when needed to prevent stock outs and maintain sales momentum.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={amazonLogo2}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Product management"
          />
        </div>
      ),
    },
    {
      title: "Amazon SEO and Listing Optimization",
      description:
        "Our team of Listing Optimization specialists are experts at creating high- converting product listings that get noticed and drive sales. We conduct in-depth keyword research to target the most relevant search terms, craft compelling product descriptions that showcase the value proposition of your products, and create high-quality images and videos that capture customer attention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={amazonLogo3}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="SEO optimization"
          />
        </div>
      ),
    },
    {
      title: "Order Fulfillment & Customer Service",
      description:
        "We handle everything related to order fulfillment through Amazon FBA. Your products are strategically placed across Amazon's fulfillment centers to ensure fast and reliable delivery to your customers. Our exceptional customer service team is available to address any customer inquiries or issues promptly and professionally, ensuring customer satisfaction and repeat business.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={amazonLogo4}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Ad campaign management"
          />
        </div>
      ),
    },
  ];
  const pricingPlans = [
    {
      name: "1 MONTH ESSENTIAL",
      description:
        "A starter package to set up and manage your Amazon Wholesale store with essential tools and support.",
      monthlyPrice: 1800,
      link: "/contact-us",
      features: [
        "Amazon Seller Central Account Setup",
        "Product Research (up to 5 products)",
        "Basic Product Listing Optimization (up to 5 listings)",
        "Store Launch and Inventory Management (initial setup)",
        "Ongoing Aftersales Support (limited to 1 month)",
      ],
    },
    {
      name: "3 MONTHS PLUS",
      description:
        "Enhanced support and resources for building a strong Amazon presence with advanced listing optimization and ongoing management.",
      monthlyPrice: 2500,
      link: "/contact-us",
      features: [
        "Amazon Seller Central Account Setup",
        "Marketplace Approvals and Reseller Certificate Acquisition",
        "Product Research (up to 10 products)",
        "Advanced Product Listing Optimization (up to 10 listings)",
        "Pre-Marketing Strategies",
        "Store Launch, Inventory Management, and Order Fulfillment",
        "Ongoing Aftersales Support (3 months)",
      ],
    },
    {
      name: "6 MONTHS PREMIUM",
      description:
        "Comprehensive package offering full-scale support and tailored strategies for successful long-term store management on Amazon.",
      monthlyPrice: 4500,
      link: "/contact-us",
      features: [
        "Amazon Seller Central Account Setup",
        "Marketplace Approvals and Reseller Certificate Acquisition",
        "Comprehensive Product Research (up to 15 products)",
        "Full Product Listing Optimization (up to 15 listings)",
        "Tailored Pre-Marketing Strategies",
        "Store Launch, Inventory Management, and Order Fulfillment",
        "Ongoing Aftersales Support (6 months)",
        "Virtual Assistance for Inventory Management (6 months)",
      ],
    },
  ];

  return (
    <>
      {/* Main section */}
      <section className="container flex flex-col lg:flex-row mx-auto my-20 gap-20 justify-center items-center lg:justify-around">
        <div className="w-[23rem] lg:w-[35rem] text-titleColor p-3 text-center lg:text-start flex flex-col items-center lg:items-start justify-center gap-3">
          <h2 className="text-textColor text-3xl">
            Establishing frameworks that fuel triumph.
          </h2>
          <h1 className="flex flex-col md:flex-row text-5xl font-semibold leading-relaxed lg:leading-loose">
            Amazon Automation
          </h1>
          <h3 className="text-textColor">
            Take it to the next level with our Amazon marketing services. ECOM
            PINNACLE does all the work-from store creation to order management.
            <br />
            <br />
            Setting up a profitable store that meets its customers’ needs is the
            first step in dominating the market. We, at ECOM PINNACLE handle
            everything from product listings to brand visibility
          </h3>
          <Link href="/contact-us">
            <Button className="rounded-full px-32 lg:px-40 py-4 w-52 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px] transition-all duration-500">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
        <div className="p-3 lg:p-0">
          <Image
            src={img}
            alt="Main Image"
            className="rounded-xl w-[320px] h-[480px] object-cover"
          />
        </div>
      </section>

      <section className="pt-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl text-textColor tracking-wider font-semibold">
            Our Process to FBA
          </h2>
          <h1 className="text-5xl font-semibold tracking-wider">Wholesale</h1>
          <h3 className="text-gray-900">Success</h3>
        </div>
        <Timeline data={data} />
        <StickyScroll content={content} />
      </section>

      <section className="p-5">
        <PricingPage pricingPlans={pricingPlans} />
      </section>

      {/* CTA Section 2 with background image */}
      <section
        className="flex flex-row md:w-[700px] lg:w-[950px] xl:w-[1280px] h-[455px] mx-5 md:mx-auto my-[120px] justify-between px-5 rounded-3xl"
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
          <Link href="/about">
            <Button className="rounded-3xl px-auto py-4 w-56 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px]">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <section className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center w-full bg-secondaryColor px-20 min-h-[22rem] py-10">
          <div className="flex flex-col gap-5 lg:w-7/12">
            <Image
              src={blur}
              alt="dollar symbol"
              className="h-[4rem] w-[4rem]"
            />
            <h1 className="text-2xl font-medium">Effortless Passive Income</h1>
            <h2 className="font-normal">
              Say goodbye to the hassles of traditional income streams and
              embrace a lifestyle where your money works for you.
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:w-7/12">
            <Image
              src={returns}
              alt="dollar symbol"
              className="h-[4rem] w-[4rem]"
            />

            <h1 className="text-2xl font-medium">Best Return on Investment</h1>
            <h2 className="font-normal">
              At Ecom Pinnacle, we believe in maximizing your gains with
              strategic and calculated investments.
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:w-7/12">
            <Image
              src={chart}
              alt="dollar symbol"
              className="h-[4rem] w-[4rem]"
            />
            <h1 className="text-2xl font-medium">99.99% Success</h1>
            <h2 className="font-normal">
              Our proven strategies and unwavering commitment set the stage for
              guaranteed success.
            </h2>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <Testimonial />
    </>
  );
}
