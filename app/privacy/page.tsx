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
            information collected from users (each, a “User”) of the http://Ecom
            Pinnacle.com/ website (“Site”). This privacy policy applies to the
            Site and all products and services offered by Ecom Pinnacle. For
            more details about Us see Section “Contacting us”.
          </p>

          <h1 className="text-3xl font-semibold">
            What information we collect?
          </h1>
          <p>We collect and proceed with the following information:</p>
          <h2 className="text-2xl font-semibold">
            (a) Personal identification information
          </h2>
          <p>
            We may collect personal identification information from Users in a
            variety of ways, including, but not limited to, when Users visit our
            Site, subscribe to the newsletter, fill out a form, and in
            connection with other activities, services, features or resources we
            make available on our Site.Users may be asked for, as appropriate,
            name and surname, email address, phone number, User’s ID in Internet
            messengers (Skype, etc.), name of the company which the User
            represents, job position in this company, User’s feedback.Users
            may, however, visit our Site anonymously. We will collect personal
            identification information from Users only if they voluntarily
            submit such information to us. Users can always refuse to supply
            personal identification information, except that it may prevent them
            from engaging in certain Site related activities.
          </p>

          <h2 className="text-2xl font-semibold">
            (b) Non-personal identification information
          </h2>
          <p>
            We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer and
            technical information about Users means of connection to our Site,
            such as the operating system and the Internet service providers
            utilized and other similar information.
          </p>
          <h2 className="text-2xl font-semibold">(c) Web browser cookies</h2>
          <p>
            Our Site may use “cookies” to enhance User experience. User’s web
            browser places cookies on their hard drive for record-keeping
            purposes and sometimes to track information about them. User may
            choose to set their web browser to refuse cookies, or to alert you
            when cookies are being sent. If they do so, note that some parts of
            the Site may not function properly.
          </p>

          <h1 className="text-3xl font-semibold">
            What are the legal bases for procession of information?
          </h1>
          <p>We process information on the following legal bases:</p>
          <ul>
            (a) regarding personal identification information:
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li className="ml-5">
                User’s consent (when User agrees to send the personal
                information)
              </li>
              <li className="ml-5">
                our legitimate interest, namely offering Our services to the
                User or the company the User represents, negotiation and
                conclusion of respective contracts, and performance under such
                contracts;
              </li>
            </ul>
          </ul>
          <ul>
            (b) regarding non-personal identification information and web
            browser cookies:
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li className="ml-5">User’s consent;</li>
              <li className="ml-5">
                our legitimate interest, namely proper administration of our
                website.
              </li>
            </ul>
          </ul>

          <h1 className="text-3xl font-semibold">
            How we use collected information?
          </h1>
          <ul>
            Ecom Pinnacle may collect and use Users personal information for the
            following purposes:
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li className="ml-5">
                To offer Our services and products to the User or the company
                the User represents.
              </li>
              <li className="ml-5">
                To provide Our services and products to the User or the company
                the User represents.
              </li>
              <li className="ml-5">
                To fulfill legal obligations based on agreements or other
                arrangements with the User or the company the User represents.
              </li>
              <li className="ml-5">
                To manage and coordinate Our relationship with the User or the
                company the User represents.
              </li>
              <li className="ml-5">
                To personalize User experience: We may use information in the
                aggregate to understand how Our Users as a group use the
                services and resources provided on our Site.
              </li>
              <li className="ml-5">
                To run a promotion, contest, survey or other Site feature: To
                send Users information they agreed to receive about topics We
                think will be of interest to them.
              </li>
              <li className="ml-5">
                To send periodic emails: We may use the email address to respond
                to their inquiries, questions, and/or other requests. If User
                decides to opt-in to our mailing list, they will receive emails
                that may include company news, updates, related product or
                service information, etc. If at any time the User would like to
                unsubscribe from receiving future emails, We include detailed
                unsubscribe instructions at the bottom of each email.
              </li>
              <li className="ml-5">
                For any other legitimate business purposes.
              </li>
            </ul>
          </ul>
          <p>
            Information is collected only to the extent necessary for processing
            purposes.
          </p>

          <h1 className="text-3xl font-semibold">
            What is the term of procession (storage) of information?
          </h1>
          <ul>
            Ecom Pinnacle stores the information collected within the following
            terms:
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li className="ml-5">
                personal identification information – 10 years after the User’s
                last inquiry (in case no contract was concluded after the
                respective inquiry), or 10 years after the last contract with
                User or with the company which the User represents, terminates;
              </li>
              <li className="ml-5">
                non-personal identification information and web browser cookies
                – 1 year after the respective information was collected.
              </li>
            </ul>
          </ul>

          <h1 className="text-3xl font-semibold">
            What is the term of procession (storage) of information?
          </h1>
          <p>
            We adopt appropriate data collection, storage and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure or destruction of your personal
            information and data stored on our Site.
          </p>
          <p>Sharing your personal information</p>
          <p>
            We do not sell, trade, or rent Users personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates and advertisers for the purposes outlined above. We may
            use third party service providers to help us operate our business
            and the Site or administer activities on our behalf, such as sending
            out newsletters or surveys. We may share your information with these
            third parties for those limited purposes provided that you have
            given us your permission.We reserve the right to provide your
            personal information inside Our company.
          </p>
          <p>The basic rights of User</p>
          <ul>
            The User has the following rights regarding information collected by
            Us:
          </ul>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li className="ml-5">
              to request access to the information related to the User;
            </li>
            <li className="ml-5">
              to request rectification of the information related to the User;
            </li>
            <li className="ml-5">
              to request erasure of the information related to the User from Our
              database;
            </li>
            <li className="ml-5">
              to cancel (withdraw) User’s consent to the processing of the
              information related to the User;
            </li>
            <li className="ml-5">
              to request a restriction on the processing of the information
              related to the User;
            </li>
            <li className="ml-5">
              to request a transfer of the information related to the User to
              another controller;
            </li>
            <li className="ml-5">
              to request a transfer of the information related to the User to
              another controller;
            </li>
          </ul>
          <p>
            If We, upon the User’s request, erase information related to the
            User from Our database, We will keep only the information that may
            be necessary for protecting our legitimate interests or for public
            authorities.If the User requires Us to transfer information related
            to the User to another controller, rectify it or provide access to
            it, We may first require further information in order to verify
            User’s identity.If the User is of the opinion that his/her rights
            related to the protection of information related to the User were
            breached, the User may appeal to Us or submit a complaint to the
            relevant authority for the protection of personal data in the User’s
            respective country (the country of User’s residence).
          </p>

          <h1 className="text-3xl font-semibold">
            Changes to this privacy policy
          </h1>
          <p>
            Ecom Pinnaclehas the discretion to update this privacy policy at any
            time. When we do, we will revise the updated date at the bottom of
            this page. We encourage Users to frequently check this page for any
            changes to stay informed about how we are helping to protect the
            personal information we collect. You acknowledge and agree that it
            is your responsibility to review this privacy policy periodically
            and become aware of modifications.
          </p>
          <h1 className="text-3xl font-semibold">
            Your acceptance of these terms
          </h1>
          <p>
            By using this Site and sharing your contact details with Ecom
            Pinnacle, you signify your acceptance of this policy.
          </p>
          <p>
            The Site is available only to individuals who are at least 16 years’
            old. By using this Site you agree that you’re at least 16 years old.
          </p>
          <p>
            If you do not agree to this policy, please do not use our Site. Your
            continued use of the Site following the posting of changes to this
            policy will be deemed your acceptance of those changes.
          </p>
          <p className="font-semibold my-10">Recent date of update: 24.10.2024</p>
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
