import Accordian from "@/components/ui/Accordian";
import contactUs from "../public/imgs/terms-hero.svg";
import accordianPic from "../public/imgs/accordianPic.svg";
import Image from "next/image";

export default function Page() {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full bg-secondaryColor my-20">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center h-[290px] md:h-[600px]">
                        <Image
                            src={contactUs}
                            alt="Lets Talk"
                            className="size-[260px] md:size-[550px]"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="w-full">
                <div className="flex flex-col mx-auto w-[320px] md:container gap-5 px-2 md:px-10 lg:px-20">
                    <h1 className="text-3xl font-semibold mb-4">Terms and Conditions</h1>
                    <p className="text-sm italic mb-6">Last Updated: [Insert Date]</p>
                    
                    {/* Section: Introduction */}
                    <h2 className="text-2xl font-semibold mt-6">Introduction</h2>
                    <p className='text-lg'>
                        Welcome to Ecom Pinnacle LTD. ("we," "us," or "our’’) used in this section refers to Ecom Pinnacle and our services. Following are the terms and conditions you will be bounded by. In case of disagreement to these conditions, you may discontinue the use of our services and website.
                    </p>

                    {/* Section: Services and Payment Terms */}
                    <h2 className="text-2xl font-semibold mt-6">Services and Payment Terms</h2>
                    <p className='text-lg'>
                        Ecom Pinnacle LTD. offers comprehensive automation services for Amazon, Shopify, and TikTok shops. By placing an order for our services, you agree to the following terms regarding payment and service provision.
                    </p>

                    {/* Section: Email Security */}
                    <h2 className="text-2xl font-semibold mt-6">Email Security</h2>
                    <p className='text-lg'>
                        The confidentiality of all emails, both received and sent, is maintained by Ecom Pinnacle LTD. Email services are end-to-end encrypted, ensuring that only intended recipients can access the emails.
                    </p>

                    {/* Section: Shipping and Delivery */}
                    <h2 className="text-2xl font-semibold mt-6">Shipping and Delivery</h2>
                    <p className='text-lg'>
                        You agree to specific delivery and shipping terms applied to your store products. Order fulfillment will be handled by us as outlined in our services.
                    </p>

                    {/* Section: Refunds and Non-Performance */}
                    <h2 className="text-2xl font-semibold mt-6">Refunds and Non-Performance</h2>
                    <p className='text-lg'>
                        Ecom Pinnacle LTD. provides a 100% refund on all services under specific conditions detailed in our refund policy, applicable only in exceptional circumstances.
                    </p>

                    {/* Section: Intellectual Property */}
                    <h2 className="text-2xl font-semibold mt-6">Intellectual Property</h2>
                    <p className='text-lg'>
                        All tools, content, and documentation provided on our site are the exclusive property of Ecom Pinnacle LTD. You are granted a non-exclusive, limited license for the agreed-upon services.
                    </p>

                    {/* Section: Limitation of Liability */}
                    <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
                    <p className='text-lg'>
                        Ecom Pinnacle LTD. will not be liable for indirect, consequential, or incidental damage during the use of our services.
                    </p>

                    {/* Section: Indemnification */}
                    <h2 className="text-2xl font-semibold mt-6">Indemnification</h2>
                    <p className='text-lg'>
                        You agree to indemnify Ecom Pinnacle and its affiliates from any liabilities resulting from violation of these terms or misuse of our services.
                    </p>

                    {/* Section: Privacy */}
                    <h2 className="text-2xl font-semibold mt-6">Privacy</h2>
                    <p className='text-lg'>
                        You agree to our privacy policy regarding the collection of your personalized data for the use of our services and site.
                    </p>

                    {/* Section: Modification of Terms */}
                    <h2 className="text-2xl font-semibold mt-6">Modification of Terms</h2>
                    <p className='text-lg'>
                        Ecom Pinnacle reserves the right to revise these terms at any time. Continued use of our site indicates acceptance of updated terms.
                    </p>

                    {/* Section: Contact Information */}
                    <h2 className="text-2xl font-semibold mt-6">Contact Information</h2>
                    <p className='text-lg'>
                        For any questions, please contact us at:
                        <br /> Email: info@travellia.co.uk
                        <br /> Phone: +447857153351
                        <br /> Office 231, 85 Dunstall Hill Wolverhampton, England WV6 0SR
                    </p>
                </div>
            </section>

            {/* Accordion Section */}
            <section className="my-40">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mx-auto p-5 mt-10">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-semibold mb-10">
                            Frequently Asked Questions
                        </h1>
                        <div className="max-w-[35rem]">
                            <Accordian />
                        </div>
                    </div>
                    <Image src={accordianPic} alt="Accordion Illustration" />
                </div>
            </section>
        </>
    );
}
