import Image from "next/image";
import logo from '../public/imgs/Final.png'
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <div className="flex mx-auto w-full max-w-screen-2xl m-2 p-2">
            <Image
                src={logo}
                alt="Logo"
                width={128}
                height={54}
            />

            <div className="flex gap-5">
                <h1>Home</h1>
                <h1>Service</h1>
                <h1>About</h1>
                <h1>Contact Us</h1>
            </div>
        
            <Button className="">
                Book a Call
            </Button>
        </div>
    )
}
