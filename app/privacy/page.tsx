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
            (“Ecom Pinnacle” or “We”) collects, uses, maintains and discloses
            information collected from users (each, a “User”) of the http://EcomPinnacle.com/ website
            (“Site”). This privacy policy applies to the Site and all products
            and services offered by Ecom Pinnacle. For more details about Us,
            see Section “Contacting us”.
          </p>

          <h1 className="text-3xl font-semibold">What information we collect?</h1>
          <p>We collect and process the following information:</p>

          <h2 className="text-2xl font-semibold">(a) Personal identification information</h2>
          <p>
            We may collect personal identification information from Users in a
            variety of ways, including when Users visit our Site, subscribe to
            the newsletter, fill out a form, and in connection with other
            activities, services, features, or resources we make available on
            our Site. Users may be asked for, as appropriate, name and surname,
            email address, phone number, User’s ID in Internet messengers
            (Skype, etc.), name of the company which the User represents, job
            position in this company, User’s feedback. Users may visit our Site
            anonymously. We will collect personal identification information
            from Users only if they voluntarily submit such information to us.
            Users can always refuse to supply personal information, except that
            it may prevent them from engaging in certain Site-related
            activities.
          </p>

          <h2 className="text-2xl font-semibold">(b) Non-personal identification information</h2>
          <p>
            We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer, and
            technical information about Users' means of connection to our Site,
            such as the operating system and the Internet service providers
            utilized.
          </p>

          <h2 className="text-2xl font-semibold">(c) Web browser cookies</h2>
          <p>
            Our Site may use “cookies” to enhance User experience. User’s web
            browser places cookies on their hard drive for record-keeping
            purposes and sometimes to track information about them. Users may
            choose to set their web browser to refuse cookies or alert when
            cookies are being sent. Note that some parts of the Site may not
            function properly if cookies are disabled.
          </p>

          <h1 className="text-3xl font-semibold">What are the legal bases for processing information?</h1>
          <p>We process information on the following legal bases:</p>
          <ul>
            (a) Personal identification information:
            <ul className="list-disc ml-5">
              <li>User’s consent when User agrees to send personal information</li>
              <li>
                Our legitimate interest in offering services, negotiating, and
                fulfilling contracts with the User or the company they
                represent.
              </li>
            </ul>
          </ul>
          <ul>
            (b) Non-personal identification information and cookies:
            <ul className="list-disc ml-5">
              <li>User’s consent</li>
              <li>Our legitimate interest in proper administration of our site.</li>
            </ul>
          </ul>

          <h1 className="text-3xl font-semibold">How we use collected information?</h1>
          <ul>
            Ecom Pinnacle may use Users' personal information for purposes such as:
            <ul className="list-disc ml-5">
              <li>Offering our services and products to the User or their company</li>
              <li>Fulfilling legal obligations based on agreements</li>
              <li>Personalizing User experience and responding to inquiries</li>
              <li>
                Sending emails, newsletters, or updates, provided the User has
                opted in to receive them.
              </li>
              <li>For any other legitimate business purposes.</li>
            </ul>
          </ul>

          <h1 className="text-3xl font-semibold">Data storage duration</h1>
          <ul>
            We store data within the following terms:
            <ul className="list-disc ml-5">
              <li>
                Personal data: 10 years after the last inquiry or contract termination
              </li>
              <li>Non-personal data and cookies: 1 year after collection</li>
            </ul>
          </ul>

          <h1 className="text-3xl font-semibold">Data protection</h1>
          <p>
            We implement data collection, storage, processing practices, and
            security measures to protect against unauthorized access,
            alteration, or destruction of your information.
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
