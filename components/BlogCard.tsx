import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image, { StaticImageData } from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

interface BlogCardProps {
  img: StaticImageData;
  text: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ img, text }) => {
  return (
    <Card className="w-[366px] h-[366px] relative ">
      <CardHeader className="h-[250px]">
        <Image
          src={img}
          alt="blog card image"
          className="object-cover w-full h-full rounded-lg"
        />
      </CardHeader>
      <div className="w-full absolute inset-0 -bottom-44 flex justify-center items-center z-10 ">
        <div className="w-[320px] h-[200px] bg-[#F5F7FA] rounded-3xl mx-auto p-4 mb-10 drop-shadow-lg">
          <CardBody className="flex flex-col gap-4">
            <p className="text-[#4D4D4D] font-semibold text-lg text-center">
              {text}
            </p>
            <div className="flex gap-2 items-center justify-center text-[#4CAF4F] font-semibold">
              <p>Read more</p>
              <FaLongArrowAltRight />
            </div>
          </CardBody>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
