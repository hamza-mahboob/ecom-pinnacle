import Image from "next/image";
import logo from "../public/imgs/Final.png";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <>
      <header className="w-full">
        <div className="container mx-auto my-4">
          <div className="lg:w-[900px] xl:w-[1200px] mx-auto flex flex-row justify-between items-center">
            <Image src={logo} alt="Logo" width={128} height={54} />

            <div className="flex gap-10">
              <h1 className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Home
              </h1>
              <h1 className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Services
              </h1>
              <h1 className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                About
              </h1>
              <h1 className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Contact Us
              </h1>
            </div>

            <Button className="rounded-full px-auto py-4 w-32 h-12 bg-primaryColor hover:bg-secondaryColor text-base text-white ">
              Book a Call
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
