import Image from 'next/image'
import React from 'react'
import img from '../public/imgs/about page main image.jpg'
import img2 from '../public/imgs/about pic 2.png'
import { Button } from '@/components/ui/button'
import amazonLogo from '../public/imgs/amazon logo.png'
import ytLogo from '../public/imgs/ytLogo.png'
import tiktokLogo from '../public/imgs/TikTokLogo.png'
import shopifyLogo from '../public/imgs/shopifyLogo.png'
import OurValues from '@/components/OurValues'
import ethan from '../public/imgs/ethan.png'
import olivia from '../public/imgs/olivia.png'
import emily from '../public/imgs/emily.png'
import lucas from '../public/imgs/lucas.png'
import wave from '../public/imgs/wave.png'
import BlogCard from '@/components/BlogCard'
import blogImg1 from '../public/imgs/blog-img-1.png'
import blogImg2 from '../public/imgs/blog-img-2.png'
import blogImg3 from '../public/imgs/blog-img-3.png'
import Accordian from "../../components/ui/Accordian";
import accordianPic from "../public/imgs/accordianPic.svg";
import Testimonial from '@/components/Testimonial'

export default function page() {
    return (
        <>
            {/* Main section */}
            <section className='container flex flex-col lg:flex-row mx-auto my-20 gap-20 justify-center items-center'>
                <div className='w-[32rem] lg:w-[35rem] text-titleColor p-3 text-center lg:text-start'>
                    <h1 className='flex flex-col md:flex-row text-5xl font-semibold leading-relaxed lg:leading-loose'>Helping Millions Grow Better Since 2010</h1>
                    <h3 className='text-textColor'>Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. In lorem lacus quis egestas tincidunt neque ut accumsan.</h3>
                    <Button className="rounded-xl px-auto py-4 w-52 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px] transition-all duration-500">
                        Book a Call
                    </Button>
                </div>
                <div className='p-3 lg:p-0'>
                    <Image src={img} alt='Main Image' className='rounded-xl' width={540} height={389} />
                </div>
            </section>

            {/* Grid  */}
            <section className='container mx-auto lg:py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:w-[50rem] mx-auto gap-20 text-titleColor p-3'>
                    <div className='flex'>
                        <Image src={amazonLogo} alt='Amazon logo' className='object-contain mb-auto' />
                        <div className='mx-5 leading-loose'>
                            <h2 className='text-2xl mb-5'>Amazon Automation</h2>
                            <h3 className='text-textColor'>Lorem Ipsum has been the industryLorem Ipsum has been the </h3>
                        </div>
                    </div>
                    <div className='flex'>
                        <Image src={shopifyLogo} alt='Shopify logo' className='object-contain mb-auto' />
                        <div className='mx-5 leading-loose'>
                            <h2 className='text-2xl mb-5'>Shopify Automation</h2>
                            <h3 className='text-textColor'>Lorem Ipsum has been the industryLorem Ipsum has been the </h3>
                        </div>
                    </div>
                    <div className='flex'>
                        <Image src={tiktokLogo} alt='TikTok logo' className='object-contain mb-auto' />
                        <div className='mx-5 leading-loose'>
                            <h2 className='text-2xl mb-5'>TikTok Automation</h2>
                            <h3 className='text-textColor'>Lorem Ipsum has been the industryLorem Ipsum has been the </h3>
                        </div>
                    </div>
                    <div className='flex'>
                        <Image src={ytLogo} alt='Youtube logo' className='object-contain mb-auto' />
                        <div className='mx-5 leading-loose'>
                            <h2 className='text-2xl mb-5'>Youtube Automation</h2>
                            <h3 className='text-textColor'>Lorem Ipsum has been the industryLorem Ipsum has been the </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our mission  */}
            <section className='container flex flex-col lg:flex-row mx-auto my-20 lg:my-40 gap-20 justify-center items-center'>
                <div className='p-3 lg:p-0'>
                    <Image src={img2} alt='Main Image' className='rounded-xl ' width={540} height={389} />
                </div>
                <div className='lg:w-[35rem] text-center lg:text-start p-3'>
                    <h1 className='flex flex-col lg:flex-row text-5xl text-titleColor font-semibold leading-loose mb-5'>Our Mission</h1>
                    <h2 className='text-[#1D2939] text-2xl leading-relaxed my-5'>Innovative Digital Marketing Solutions to Boost Your Sales</h2>
                    <h3 className='text-textColor leading-loose'>Nullam dictum neque dignissim lacinia. Adipiscing quam nunc non odio ac dolor felis euismod venenatis. Pellentesque erat gravida enim sapien. Enim tincidunt volutpat vitae ac. Dictum purus id sed aliquam ornare. Ac congue vitae vel velit.</h3>


                    <h2 className='mt-5 text-xl text-titleColor'>
                        Ecom Pinnacle
                    </h2>
                    <h3 className='text-sm text-[#F8A62B] my-2'>
                        Co-Founder
                    </h3>
                </div>
            </section>

            {/* Our values  */}
            <section className='my-20 lg:my-40'>
                <OurValues />
            </section>

            {/* meet our experts  */}
            <section className='container mx-auto my-20 lg:my-40 p-3'>
                <div className="text-center lg:w-[58rem] mx-auto">
                    <h1 className='text-5xl font-semibold my-10 text-titleColor'>Meet Our Expertise</h1>
                    <h3 className='text-textColor leading-loose'>Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. In lorem lacus quis egestas tincidunt neque ut accumsan.</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 lg:mt-40 place-items-center'>
                    <div>
                        <Image src={olivia} alt='Main Image' className='rounded-xl object-contain w-[16.875rem]' />
                        <div className='bg-[#FEF6FB] rounded-xl text-center w-[16.875rem] p-6 my-2 align-middle'>
                            <h3 className='text-titleColor text-2xl'>Olivia Brown</h3>
                            <h4 className='text-textColor text-xs'>Marketing Strategist</h4>
                        </div>
                    </div>
                    <div>
                        <Image src={ethan} alt='Main Image' className='rounded-xl object-contain w-[16.875rem]' />
                        <div className='bg-[#FEF6FB] rounded-xl text-center w-[16.875rem] p-6 my-2 align-middle'>
                            <h3 className='text-titleColor text-2xl'>Ethan Clark</h3>
                            <h4 className='text-textColor text-xs'>SEO Specialist</h4>
                        </div>
                    </div>
                    <div>
                        <Image src={emily} alt='Main Image' className='rounded-xl object-contain w-[16.875rem]' />
                        <div className='bg-[#FEF6FB] rounded-xl text-center w-[16.875rem] p-6 my-2 align-middle'>
                            <h3 className='text-titleColor text-2xl'>Emily Davis</h3>
                            <h4 className='text-textColor text-xs'>Social Media Manager</h4>
                        </div>
                    </div>
                    <div>
                        <Image src={lucas} alt='Main Image' className='rounded-xl object-contain w-[16.875rem]' />
                        <div className='bg-[#FEF6FB] rounded-xl text-center w-[16.875rem] p-6 my-2 align-middle'>
                            <h3 className='text-titleColor text-2xl'>Lucas Evans</h3>
                            <h4 className='text-textColor text-xs'>Content Creator</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* affordable price for everyone  */}
            <section className="bg-primaryColor text-white py-40 my-20">
                <div className="max-w-[85rem] w-8/12 mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 text-center lg:text-start">
                    {/* Left Section */}
                    <div className="space-y-6 lg:pr-8 border-b lg:border-b-0 lg:border-r-2 border-[#4A1FB8] pb-8 lg:pb-0">
                        <h2 className="text-4xl md:text-5xl font-bold lg:leading-relaxed text-center lg:text-start">
                            Affordable Pricing for Everyone
                        </h2>
                        <p className="text-base leading-loose font-light">
                            Nulla enim lectus porttitor pulvinar. Diam sed fusce aliquam lacus. Tincidunt ultricies cursus amet donec egestas. Enim risus quam in in urna scelerisque proin. Eget aliquam cras nec egestas massa.
                        </p>
                        <div className='flex justify-center items-center lg:block'>

                            <ul className="space-y-3 tracking-wider font-light">
                                <li className="flex items-center space-x-3">
                                    <Image src={wave} alt='wave icon' />
                                    <span>Custom reporting</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Image src={wave} alt='wave icon' />
                                    <span>Campaign Reporting</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:pl-8 flex flex-col justify-center lg:w-[28rem] text-center lg:text-start">
                        <div className="border-b border-[#4A1FB8] lg:pl-8 pb-5">
                            <p className="text-xs font-light">Starts at</p>
                            <h3 className="text-5xl font-medium mt-3">$299/mo</h3>
                        </div>
                        <p className="mt-4 text-base leading-loose lg:leading-relaxed lg:pl-8">
                            Nulla enim lectus porttitor pulvinar. Diam sed fusce aliquam lacus. Tincidunt ultricies cursus amet donec egestas.
                        </p>
                        <button className="mt-6 bg-[#5925DC] hover:opacity-90 text-white py-4 px-6 rounded-lg mx-auto lg:ml-8
                        w-48">
                            TALK TO SALES
                        </button>
                    </div>
                </div>
            </section>

            {/* Accordian */}
            <section className='my-20'>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mx-auto p-5">
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

            {/* Testimonial */}
            <section className='my-20'>
                <Testimonial />
            </section>

            {/* Blogs */}
            <section className="w-full my-[120px] px-5">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="font-semibold text-[#4D4D4D] text-4xl">
                            Caring is the new marketing
                        </h1>
                        <p className="text-[#717171] lg:w-[628px] text-center">
                            The Nexcent blog is the best place to read about the latest
                            membership insights, trends and more. See who's joining the
                            community, read about how our community are increasing their
                            membership income and lot's more.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <BlogCard
                                img={blogImg1}
                                text="Creating Streamlined Safeguarding Processes with OneRen"
                            />
                            <BlogCard
                                img={blogImg2}
                                text="What are your safeguarding responsibilities and how can you manage them?"
                            />
                            <BlogCard
                                img={blogImg3}
                                text="Revamping the Membership Model with Triathlon Australia Together"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
