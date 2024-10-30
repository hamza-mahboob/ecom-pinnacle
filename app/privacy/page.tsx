import Accordian from "@/components/ui/Accordian";
import contactUs from "../public/imgs/privacy-policy-hero.png";
import accordianPic from "../public/imgs/accordianPic.svg";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <>
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

      <section className="w-full">
        <div className="flex flex-col mx-auto w-[320px] md:container gap-5 px-2 md:px-10 lg:px-20">
          <p>
            This Privacy Policy governs the manner in which Ecom Pinnacle Ltd
            (“Ecom Pinnacle” or “We”) collects, uses, maintains, and discloses
            information collected from users (each, a “User”) of the http://EcomPinnacle.com/ website
            (“Site”). This privacy policy applies to the Site and all products
            and services offered by Ecom Pinnacle. For more details about Us,
            see Section “Contacting us”.
          </p>

          <h1 className="text-3xl font-semibold">Personal Data Collection & Usage</h1>
          <p>
            Payment to Ecom Pinnacle is non-refundable in case of suspension or closing of the business. We collect anonymous general data from clients, including IP-based locations, viewed content, and purchases to target the audience and enhance their experience. Your personal information and sensitive data are kept confidential and stored securely.
          </p>

          <h1 className="text-3xl font-semibold">Types of Information We Handle</h1>
          <h2 className="text-2xl font-semibold">(1) Personal Information (PII)</h2>
          <p>
            The personal information will be kept confidential without sharing, selling, or renting.
          </p>
          <h2 className="text-2xl font-semibold">(2) Non-Personal Information (NPI)</h2>
          <p>
            To enhance the services, clicks, purchases, and views will be monitored.
          </p>

          <h1 className="text-3xl font-semibold">How We Use Your Data</h1>
          <p>
            The collected data is used for updating the services for a better client experience, including notifications for regular updates and promotions for efficient automation.
          </p>

          <h1 className="text-3xl font-semibold">Data Sharing & Security</h1>
          <p>
            We have secure servers protecting your data and payment information. All data is kept strictly confidential, except when legally required or with your permission.
          </p>

          <h1 className="text-3xl font-semibold">Cookies</h1>
          <p>
            Cookies are stored to enable personalized advertising. You can rule out this anonymous data.
          </p>

          <h1 className="text-3xl font-semibold">Data Protection</h1>
          <p>
            We implement data collection, storage, processing practices, and security measures to protect against unauthorized access, alteration, or destruction of your information.
          </p>

          <p className="font-semibold my-10">Last updated: 24.10.2024</p>
        </div>
      </section>

      {/* Accordian */}
      <section>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mx-auto p-5 mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mb-10">
              Frequently Asked Questions
            </h1>
            <div className="max-w-[35rem]">
              <Accordian />
            </div>
          </div>
          <Image src={accordianPic} alt="Accordian Pic" />
        </div>
      </section>
    </>
  );
}
