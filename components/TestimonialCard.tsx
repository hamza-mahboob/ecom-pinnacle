import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface props {
  name: string,
  position: string,
  feedback: string,
  img: string | StaticImport
}

export default function TestimonialCard({ name, position, feedback, img }: props) {
  return (
    <div className="fw-[513px] h-[312px] bg-primaryColor text-white rounded-3xl p-10">
      <div className="flex flex-row gap-5 items-center mb-[19px]">
        <Image
          src={img}
          alt={name} // Use the name as alt text for better accessibility
          width={0} // Set the width of the image
          height={0} // Set the height of the image
          className="w-[85px] h-[85px] object-cover object-center  rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2 className="text-xl font-extralight">{position}</h2>
        </div>
      </div>
      <p className="w-[400px]">{feedback}</p>
    </div>
  );
}
