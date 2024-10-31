'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import img from "../../public/imgs/service-hero.svg";
import timelineImg1 from "../../public/imgs/planning pic 1.jpg";
import timelineImg2 from "../../public/imgs/planning pic 2.jpg";
import timelineImg3 from "../../public/imgs/planning pic 3.jpg";
import timelineImg4 from "../../public/imgs/planning pic 4.jpg";
import shopifyLogo from "../../public/imgs/shopify-store-setup.png";
import shopifyLogo2 from "../../public/imgs/product-listing-and-inventory-management.png";
import shopifyLogo3 from "../../public/imgs/custom-theme-development.png";
import shopifyLogo4 from "../../public/imgs/marketing-seo.png";
import shopifyLogo5 from "../../public/imgs/social-media-integration.png";
import shopifyLogo6 from "../../public/imgs/sales-and-promotions-strategy.png";
import shopifyLogo7 from "../../public/imgs/performance-analysis-and-reporting.png";
import shopifyLogo8 from "../../public/imgs/customer-support-and-engagement.png";
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
      title: "Planning",
      content: (
        <div>
          <p className="text-gray-900 dark:text-gray-200 text-xs md:text-xl font-normal mb-8">
            We work closely with you to understand your brand, target audience,
            and business objectives.
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
              src={timelineImg1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg1}
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
      title: "Development",
      content: (
        <div>
          <p className="text-gray-900 dark:text-gray-200 text-xs md:text-xl font-normal mb-8">
            Our team of creative experts crafts compelling products content that
            resonates with your target audience on Shopify.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={timelineImg2}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg2}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg2}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg2}
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
      title: "Management",
      content: (
        <div>
          <p className="text-gray-900 dark:text-gray-200 text-xs md:text-xl font-normal mb-4">
            We manage your Shopify Store campaigns from launch to optimization
            to ensure you get the most out of your investment.
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
              src={timelineImg3}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg3}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg3}
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
      title: "Reporting",
      content: (
        <div>
          <p className="text-gray-900 dark:text-gray-200 text-xs md:text-xl font-normal mb-4">
            We provide comprehensive analytics and reporting to track your
            progress and measure the success of your campaigns.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={timelineImg4}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg4}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg4}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={timelineImg4}
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
      title: "Shopify Store Setup",
      description:
        "Launch your Shopify store with our expert setup service. We handle everything from initial registration to theme customization, ensuring your store is ready for business. Our team optimizes your store for both visibility and a seamless user experience, getting you set up for success.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={shopifyLogo}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Shopify store setup"
          />
        </div>
      ),
    },
    {
      title: "Product Hunting and Inventory Management",
      description:
        "We search products that are according to your niche and help you in selling them with our efficient marketing strategies and managing inventory.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={shopifyLogo2}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Product management"
          />
        </div>
      ),
    },
    {
      title: "Custom Theme Development",
      description:
        "Stand out from the crowd with a custom Shopify theme tailored to your brand. Our design team creates visually appealing and user-friendly themes that enhance the shopping experience, drive engagement, and increase sales.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={shopifyLogo3}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Custom theme development"
          />
        </div>
      ),
    },
    {
      title: "Marketing and SEO Optimization",
      description:
        "We help you optimize SEO that ranks higher in the search engine so your product can reach more people. Rank High Gain Higher!",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={shopifyLogo4}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Marketing and SEO"
          />
        </div>
      ),
    },
    {
      title: "Social Media Integration and Management",
      description:
        "Expand your reach by integrating your Shopify store with social media platforms. We set up and manage your social media accounts, ensuring they work seamlessly with your Shopify store to drive sales and engage customers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={shopifyLogo5}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Social media integration"
          />
        </div>
      ),
    },
    {
      title: "Sales and Promotions Strategy",
      description:
        "Increase your sales with effective promotions and sales strategies. We create and manage discount campaigns, seasonal promotions, and special offers tailored to your business goals, encouraging both new and repeat customers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={shopifyLogo6}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Sales strategy"
          />
        </div>
      ),
    },
    {
      title: "Performance Analysis and Reporting",
      description:
        "Monitor your Shopify store’s success with our detailed performance analysis and reporting. We provide insights and data-driven recommendations to help you make informed decisions and continuously optimize your store’s performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={shopifyLogo7}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Performance analysis"
          />
        </div>
      ),
    },
    {
      title: "Customer Support and Engagement",
      description:
        "Improve customer satisfaction with our support and engagement services. We help you manage customer interactions, respond to inquiries quickly, and build lasting relationships, enhancing loyalty and increasing sales.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={shopifyLogo8}
            width={440}
            height={440}
            className="h-full w-full object-cover opacity-90"
            alt="Customer support"
          />
        </div>
      ),
    },
  ];
  const pricingPlans = [
    {
        name: 'SILVER',
        description: 'Perfect for new entrepreneurs, this package includes 4 weeks of Facebook Ads management and a basic Shopify store setup to kickstart your online journey.',
        monthlyPrice: 500,
        link: '/contact-us',
        features: [
            'Shopify Store Setup (basic theme)',
            'Basic Product Research (up to 5 products)',
            'Initial Product Listing Optimization (up to 5 listings)',
            'Store Launch Assistance',
            'Basic Aftersales Support (1 month)',
        ],
    },
    {
        name: 'GOLD',
        description: 'A complete solution for serious sellers, including targeted Facebook Ads management, a niche-focused store, and dedicated support to maximize your store’s potential.',
        monthlyPrice: 1199,
        link: '/contact-us',
        features: [
            '360 Degree Service, Laser targeting',
            'Have Your Personal Ad Manager',
            'FREE Niche Store INCLUDED (Value $599)',
            'Store Ready To Make Sales',
            'First sale guaranteed',
        ],
    },
    {
        name: 'LIFE TIME',
        description: 'Comprehensive lifetime package for established businesses seeking continuous support, advanced Shopify store setup, and an all-inclusive social media and product management strategy.',
        monthlyPrice: 3800,
        link: '/contact-us',
        features: [
            'Logo Design',
            'Shopify Store Design',
            'Shopify Store Development',
            'Social Media Creation',
            'Social Media Campaign',
            'Social Media Posting',
            'Product Analysis',
            'Payment Integration',
            'Profitable Product Niche Research',
            'Supplier Search and Finalization',
            'Dropshipping Integration',
            'Product Hunting',
            'Order Fulfillment',
            'Shopify Account Management',
            'Inventory Management',
        ],
    },
]


  return (
    <>
      {/* Main section */}
      <section className="container flex flex-col lg:flex-row mx-auto my-20 gap-20 justify-center items-center lg:justify-around">
        <div className="w-[23rem] lg:w-[35rem] text-titleColor p-3 text-center lg:text-start flex flex-col items-center lg:items-start justify-center gap-3">
          <h2 className="text-textColor text-3xl">
            Establishing frameworks that fuel triumph.
          </h2>
          <h1 className="flex flex-col md:flex-row text-5xl font-semibold leading-relaxed lg:leading-loose">
            Shopify Automation
          </h1>
          <h3 className="text-textColor">
            Our dropshipping agency service is designed with entrepreneurs and
            mid-sized businesses in mind, providing a hassle-free supplier
            search and fulfillment process. We're here to assist in discovering
            and enhancing the sales of top- performing dropshipping products,
            all with personalized labels.
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
            Our Process to Kickstart Your
          </h2>
          <h1 className="text-5xl font-semibold tracking-wider">Shopify</h1>
          <h3 className="text-gray-900">Services</h3>
        </div>
        <Timeline data={data} />
        <StickyScroll content={content} />
      </section>

      <section className='p-5'>
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
          <Button className="rounded-3xl px-auto py-4 w-56 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px]">
            Book a Free Consultation
          </Button>
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
              At Ecom Experts, we believe in maximizing your gains with
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
