'use client'

import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default function AccordionCustomIcon() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

    return (
        <>
            {/* @ts-ignore */}
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(1)} className="text-black font-medium">What store would you recommend for a start, one product store or niche store?
                </AccordionHeader>
                <AccordionBody>
                    For beginners, we recommend the niche store as it contains multiple winning products and it will be easier to test multiple products in the same niche, in addition, you have the upsell advantage to get a higher average order value if you use upsell. And in case if at the first ads trial, a product doesn't get the expected you can test another product from your store without adding any other product in the store.
                    One product store is still a very good option, with the niche store, you statistically have a higher chance of success.
                </AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(2)} className="text-black font-medium">
                    Which platform you use to build the stores?
                </AccordionHeader>
                <AccordionBody>
                    We use Shopify as it is one of the most common platforms for eCommerce stores and is widely customizable.</AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(3)} className="text-black font-medium">
                    Where are the products shipped from?
                </AccordionHeader>
                <AccordionBody>
                    Most of the products, in the beginning, are shipped from China, in many cases, the products are already available in the US or European warehouses.
                    As soon as the sales start pouring in, we recommend our clients to contact the seller and negotiate a deal with them about the shipping and branding, as the end goal is always creating a long-lasting brand.

                </AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(4)} className="text-black font-medium">
                    How to contact us before or after your purchase?
                </AccordionHeader>
                <AccordionBody>
                    You can contact us via email help@ecompinnacle.com or +44 7857153351  via Facebook or Instagram pages.</AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(5)} className="text-black font-medium">
                    Who chooses the products placed in the stores?
                </AccordionHeader>
                <AccordionBody>
                    Our marketing team is constantly searching for the next big hitter products based on many criteria developed during recent years. All those products are not yet mainstream so there's potentially a huge market for them.
                </AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(6)} className="text-black font-medium">
                    I have never done Dropshipping. Should I try it?
                </AccordionHeader>
                <AccordionBody>
                    We have helped hundreds of entrepreneurs to start their online businesses, it is not rocket science, with a little bit of effort and grit anyone can do it!

                    All business entails risk as well as massive and consistent effort and action. But taking calculated risks brings in the results.
                </AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(7)} className="text-black font-medium">
                    How Long Do You Take To Set Up an Online Ecommerce Store?
                </AccordionHeader>
                <AccordionBody>
                    In an ideal situation, it would take 3-4 weeks to initiate an Amazon ecommerce enterprise. However, it may cause a delay based on your requirements.
                </AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(8)} className="text-black font-medium">
                    What Is Your Best Approach To Selling Products On Amazon?
                </AccordionHeader>
                <AccordionBody>
                    Amazon offers untapped market potential for businesses looking to boost their revenue through optimized product listings, digital marketing, enhanced brand content, sponsored ads, engaging sales copy, attractive product descriptions, images, and more. Our Amazon marketing services promise sales-driven business scaling
                </AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(9)} className="text-black font-medium">
                    I Have A Successful Amazon Ecommerce Store. Do I Need To Hire Amazon Marketing Experts?
                </AccordionHeader>
                <AccordionBody>
                    We are glad to hear that your ecommerce website is operating smoothly and meeting your sales objectives. However, keeping up with the changing trends is important for any business. Although your current marketing techniques might be effective, they may become outdated with time, which could affect your marketing approach in the future, especially if you fail to update your previous data. Therefore, to take your brand or online business to the next level, it's important to consult Amazon marketing agencies who can help you increase sales and improve your seller account management.
                </AccordionBody>
            </Accordion>
        </>
    );
}