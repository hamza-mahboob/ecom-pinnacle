import Accordian from "@/components/ui/Accordian";
import contactUs from "../public/imgs/terms-hero.svg";
import accordianPic from "../public/imgs/accordianPic.svg";
import Image from "next/image";

export default function Page() {
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
                    <p className='text-lg'>
                        These Terms and Conditions are intended to detail our obligations to you regarding our site as well as inform you of the rules and regulations of Ecom Pinnacle, Ltd. By using this site (Ecom Pinnacle), you agree to these Terms and Conditions, and as such we strongly encourage our visitors to read through this content regularly to stay informed of this disclaimer and any change to our Terms and Conditions. In the following Terms and Conditions, “we, us, and site” are used to refer to Ecom Pinnacle, Ltd.

                    </p>

                    <br />

                    <h1 className="text-3xl font-semibold">
                        Use of Our Website
                    </h1>
                    <p className='text-lg'>
                        You are permitted to use this site for you own purposes to print, download, and share material provided you do not modify any content without our explicit consent. Material on this website may not be republished online or offline without our permission. The copyright and all intellectual property rights of the material on this site are owned by Ecom Pinnacle, Ltd and may not be reproduced without our prior consent.
                    </p>
                    <br />
                    <p className='text-lg'>
                        The information contained in this website is for general information purposes only. While weendeavor to keep the information up-to-date and correct, we make no representations or warrantiesof any kind, express or implied, about the completeness, accuracy, reliability, suitability oravailability with respect to the website or the information, products, services, or relatedgraphics contained on the website for any purpose. Any reliance you place on such information isstrictly at your own risk.
                    </p>

                    <br />

                    <h1 className="text-3xl font-semibold">
                        Visitor Conduct
                    </h1>
                    <p className='text-lg'>
                        With the exception of personal information (the use of which is covered under our Privacy Policy), any material you send or post to this write shall be considered non-proprietary and not confidential. Unless you advise to the contrary, we remain free to copy, disclose, distribute, incorporate and otherwise use such material for any and all purposes.
                    </p>
                    <br />
                    <p className='text-lg'>
                        When using the site, please do not post or send any material for which you have not obtained all necessary consents or that which is discriminatory, obscene, pornographic, defamatory, liable to incite racial hatred, in breach of confidentiality or privacy to or from this site, which may cause annoyance or inconvenience to others, which encourages or constitutes conduct that would be deemed a criminal offence, give rise to a civil liability, or otherwise is contrary to the law of the United States of America.
                    </p>

                    <br />

                    <h1 className="text-3xl font-semibold">
                        Site Activity
                    </h1>
                    <p className='text-lg'>
                        We take the utmost care to ensure that this site is available 24/7, 365 days per year. However, websites do sometimes encounter downtime due to server or technical issues. We are not be liable if this website is unavailable at any time.
                    </p>

                    <br />

                    <h1 className="text-3xl font-semibold">
                        Links to and from other Websites
                    </h1>
                    <p className='text-lg'>
                        In order to provide additional information or services, Ecom Pinnacle, Ltd may include links to external websites. Clicking on such a link will navigate you away from Ecom Pinnacle’s site. The inclusion of links does not necessarily imply a recommendation, nor does it in any way endorse the views expressed within them. Other site’s Terms and Conditions may differ from our own. When clicking off the Ecom Pinnacle, Ltd site, we strongly encourage you to visit the other site’s Terms and Conditions to ensure it meets the standards of your own personal preferences.
                    </p>
                    <br />
                    <h1 className="text-3xl font-semibold">
                        Exclusion of Liability
                    </h1>
                    <p className='text-lg'>
                        In no event will Ecom Pinnacle, Ltd be held liable for any loss or damage of information including but not limited to indirect or consequential loss or damage, loss or damage of data, or profits arising out of or in connection with the use of this website. Ecom Pinnacle, Ltd may not be held liable or responsible in any way for loss or damage that may result to you or a third party as a result of your use of our website.
                    </p>
                    <br />
                    <p className='text-lg'>
                        We take the utmost measures to ensure that the information provided on this site is correct, however; we do not make any guarantees regarding that information. This exclusion shall include servicing or repair costs and, without limitation, any other direct, indirect or consequential loss.
                    </p>

                    <br />

                    <h1 className="text-3xl font-semibold">
                        Governing Law

                    </h1>
                    <p className='text-lg'>
                        These legal Terms and Conditions apply for all issues regarding this website shall be governed by the laws of the United States of America and in the state of USA or the appropriate defending country.
                    </p>
                </div>
            </section>

            {/* Accordian */}
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
                    <Image src={accordianPic} alt="Accordian Pic" />
                </div>
            </section>
        </>
    );
}
