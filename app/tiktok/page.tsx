import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import img from '../public/imgs/about page main image.jpg'
import timelineImg1 from '../public/imgs/planning pic 1.jpg'
import timelineImg2 from '../public/imgs/planning pic 2.jpg'
import timelineImg3 from '../public/imgs/planning pic 3.jpg'
import timelineImg4 from '../public/imgs/planning pic 4.jpg'
import tiktokLogo from '../public/imgs/t1.svg'
import tiktokLogo2 from '../public/imgs/t2.svg'
import tiktokLogo3 from '../public/imgs/t3.svg'
import tiktokLogo4 from '../public/imgs/t4.svg'
import tiktokLogo5 from '../public/imgs/t5.svg'
import tiktokLogo6 from '../public/imgs/t6.svg'
import tiktokLogo7 from '../public/imgs/t7.svg'
import tiktokLogo8 from '../public/imgs/t8.svg'
import blur from '../public/imgs/Blur.svg'
import chart from '../public/imgs/chart-column-grow.webp.svg'
import returns from '../public/imgs/investment-returns.webp.svg'
import ctaImg2 from "../public/imgs/CTA-Banner-2.png";
import { Timeline } from '@/components/ui/timeline'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Testimonial from '@/components/Testimonial'


export default function page() {
    const data = [
        {
            title: "Planning",
            content: (
                <div>
                    <p className="text-gray-900 dark:text-gray-200 text-xs md:text-xl font-normal mb-8">
                        We work closely with you to understand your
                        brand, target audience, and business objectives.
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
                        Our team of creative experts crafts compelling
                        video content that resonates with your target
                        audience on TikTok.
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
                        We manage your TikTok Shop campaigns from
                        launch to optimization to ensure you get the
                        most out of your investment.
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
                        We provide comprehensive analytics and
                        reporting to track your progress and measure
                        the success of your campaigns.
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
            title: "TikTok Shop Account Setup",
            description:
                "Get your TikTok Shop up and running with our comprehensive account setup service. We handle from initial registration to profile optimization, ensuring your shop is ready for action. Our team ensures your account is configured correctly, optimizing it for visibility and seamless user experience.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src={tiktokLogo}
                        width={440}
                        height={440}
                        className="h-full w-full object-cover opacity-90"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Product Listing and Management",
            description:
                "Keep your product catalog organized and up-to-date with our product listing and management service. We assist you in uploading products, writing compelling descriptions, and managing inventory. Our service ensures your listings are attractive and informative, helping to convert viewers into buyers.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src={tiktokLogo2}
                        width={440}
                        height={440}
                        className="h-full w-full object-cover opacity-90"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Creative Content Production",
            description:
                "Stand out on TikTok with high-quality, engaging content. Our creative team produces videos that capture attention, showcase your products, and drive conversions. We use the latest trends and innovative techniques to create content that resonates with your target audience.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src={tiktokLogo3}
                        width={440}
                        height={440}
                        className="h-full w-full object-cover opacity-90"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Influencer Collaboration",
            description:
                "Leverage the power of TikTok influencers to reach a wider audience. We connect you with influencers who align with your brand and manage collaborations to boost your shop's visibility. Our network of influencers ensures that your products are promoted authentically and effectively.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src={tiktokLogo4}
                        width={440}
                        height={440}
                        className="h-full w-full object-cover opacity-90"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Ad Campaign Management",
            description:
                "Maximize your advertising budget with our expert ad campaign management. We create and manage TikTok ads that target the right audience, driving traffic and sales to your shop. Our data-driven approach ensures that your ads perform optimally, delivering the best possible ROI.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src={tiktokLogo5}
                        width={440}
                        height={440}
                        className="h-full w-full object-cover opacity-90"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Performance Analysis and Reporting",
            description:
                "Stay informed with detailed performance analysis and reporting. We provide insights into your shop's performance, helping you make informed decisions to improve your results continuously. Our reports are easy to understand and actionable, ensuring you can track your success effectively.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src={tiktokLogo6}
                        width={440}
                        height={440}
                        className="h-full w-full object-cover opacity-90"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Customer Engagement and Support",
            description:
                "Enhance your customer relationships with our customer engagement and support services. We help you manage interactions with customers, respond to inquiries promptly, and provide excellent customer service. Our goal is to build a loyal customer base and increase repeat sales.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src={tiktokLogo7}
                        width={440}
                        height={440}
                        className="h-full w-full object-cover opacity-90"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Sales and Promotions Strategy",
            description:
                "Boost your sales with effective promotional strategies. We develop and implement sales campaigns, discounts, and special offers tailored to your business goals. Our strategies are designed to attract new customers and encourage existing customers to make repeat purchases.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src={tiktokLogo8}
                        width={440}
                        height={440}
                        className="h-full w-full object-cover opacity-90"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
    ];
    return (
        <>
            {/* Main section */}
            <section className='container flex flex-col lg:flex-row mx-auto my-20 gap-20 justify-center items-center lg:justify-around'>
                <div className='w-[23rem] lg:w-[35rem] text-titleColor p-3 text-center lg:text-start flex flex-col items-center lg:items-start justify-center gap-3'>
                    <h2 className='text-textColor text-3xl'>Establishing frameworks that fuel
                        triumph.</h2>
                    <h1 className='flex flex-col md:flex-row text-5xl font-semibold leading-relaxed lg:leading-loose'>TikTok Shop Automation</h1>
                    <h3 className='text-textColor'>Ecompinnacle provides comprehensive solutions to help businesses like
                        yours thrive on TikTok Shop. We assist you in leveraging the immense
                        potential of this booming platform and connecting with a highly engaged
                        audience. Our data-driven strategies and expert guidance ensure a
                        seamless journey to achieving your eCommerce goals on TikTok Shop.</h3>
                    <Button className="rounded-full px-32 lg:px-40 py-4 w-52 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px] transition-all duration-500">
                        Book a Free Consultation
                    </Button>
                </div>
                <div className='p-3 lg:p-0'>
                    <Image src={img} alt='Main Image' className='rounded-xl w-[320px] h-[480px] object-cover' />
                </div>
            </section>

            <section className='pt-10'>
                <div className="flex flex-col justify-center items-center gap-5">
                    <h2 className='text-2xl text-textColor tracking-wider font-semibold'>Our Process to Kickstart Your</h2>
                    <h1 className='text-5xl font-semibold tracking-wider'>TikTok</h1>
                    <h3 className='text-gray-900'>Shop Journey</h3>
                </div>
                <Timeline data={data} />
                <StickyScroll content={content} />
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

            <section className='my-20'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center w-full bg-secondaryColor px-20 min-h-[22rem] py-10">
                    <div className='flex flex-col gap-5 lg:w-7/12'>
                        <Image src={blur} alt='dollar symbol' className='h-[4rem] w-[4rem]' />
                        <h1 className='text-2xl font-medium'>Effortless Passive Income</h1>
                        <h2 className='font-normal'>Say goodbye to the hassles of traditional
                            income streams and embrace a lifestyle
                            where your money works for you.</h2>
                    </div>
                    <div className='flex flex-col gap-5 lg:w-7/12'>
                        <Image src={returns} alt='dollar symbol' className='h-[4rem] w-[4rem]' />

                        <h1 className='text-2xl font-medium'>Best Return on Investment</h1>
                        <h2 className='font-normal'>At Ecom Experts, we believe in maximizing
                            your gains with strategic and calculated
                            investments.</h2>
                    </div>
                    <div className='flex flex-col gap-5 lg:w-7/12'>
                        <Image src={chart} alt='dollar symbol' className='h-[4rem] w-[4rem]' />
                        <h1 className='text-2xl font-medium'>99.99% Success</h1>
                        <h2 className='font-normal'>Our proven strategies and unwavering
                            commitment set the stage for guaranteed
                            success.</h2>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <Testimonial />
        </>
    )
}
