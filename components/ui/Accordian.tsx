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
                <AccordionHeader onClick={() => handleOpen(1)} className="text-black font-medium">What is digital marketing?</AccordionHeader>
                <AccordionBody>
                    Nulla enim lectus porttitor pulvinar. Diam sed fusce aliquam lacus. Tincidunt ultrices cursus amet donec egestas. Enim risus quam in in urna scelerisque proin. Eget aliquam cras nec egestas massa.
                </AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(2)} className="text-black font-medium">
                    What services do digital marketing agencies offer?
                </AccordionHeader>
                <AccordionBody>
                    Nulla enim lectus porttitor pulvinar. Diam sed fusce aliquam lacus. Tincidunt ultrices cursus amet donec egestas. Enim risus quam in in urna scelerisque proin. Eget aliquam cras nec egestas massa.
                </AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(3)} className="text-black font-medium">
                    How much does digital marketing cost?
                </AccordionHeader>
                <AccordionBody>
                    Nulla enim lectus porttitor pulvinar. Diam sed fusce aliquam lacus. Tincidunt ultrices cursus amet donec egestas. Enim risus quam in in urna scelerisque proin. Eget aliquam cras nec egestas massa.
                </AccordionBody>
            </Accordion>
            {/* @ts-ignore */}
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                {/* @ts-ignore */}
                <AccordionHeader onClick={() => handleOpen(4)} className="text-black font-medium">
                    How can digital marketing help my business?
                </AccordionHeader>
                <AccordionBody>
                    Nulla enim lectus porttitor pulvinar. Diam sed fusce aliquam lacus. Tincidunt ultrices cursus amet donec egestas. Enim risus quam in in urna scelerisque proin. Eget aliquam cras nec egestas massa.
                </AccordionBody>
            </Accordion>
        </>
    );
}