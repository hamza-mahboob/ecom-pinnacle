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
import placeholderPersonImage from '../public/imgs/placeholderPersonImage.png'

export default function page() {
    return (
        <>
            {/* Main section */}
            <section className='container flex flex-col md:flex-row mx-auto mt-20 mb-40 gap-20 justify-center items-center'>
                <div className='w-[35rem] text-titleColor'>
                    <h1 className='flex flex-col md:flex-row text-5xl  font-semibold leading-loose'>Helping Millions Grow Better Since 2010</h1>
                    <h3 className='text-textColor'>Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. In lorem lacus quis egestas tincidunt neque ut accumsan.</h3>
                    <Button className="rounded-xl px-auto py-4 w-52 h-16 bg-primaryColor hover:bg-secondaryColor text-base text-[17px] text-white mt-[31px] transition-all duration-500">
                        Book a Call
                    </Button>
                </div>
                <div>
                    <Image src={img} alt='Main Image' className='rounded-xl' width={540} height={389} />
                </div>
            </section>

            {/* Grid  */}
            <section className='container mx-auto py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 w-[50rem] mx-auto gap-20 text-titleColor'>
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
            <section className='container flex flex-col md:flex-row mx-auto my-40 gap-20 justify-center items-center'>
                <div>
                    <Image src={img2} alt='Main Image' className='rounded-xl' width={540} height={389} />
                </div>
                <div className='w-[35rem]'>
                    <h1 className='flex flex-col md:flex-row text-5xl text-titleColor font-semibold leading-loose mb-5'>Our Mission</h1>
                    <h2 className='text-[#1D2939] text-2xl leading-relaxed my-5'>Innovative Digital Marketing Solutions to Boost Your Sales</h2>
                    <h3 className='text-textColor'>Nullam dictum neque dignissim lacinia. Adipiscing quam nunc non odio ac dolor felis euismod venenatis. Pellentesque erat gravida enim sapien. Enim tincidunt volutpat vitae ac. Dictum purus id sed aliquam ornare. Ac congue vitae vel velit.</h3>


                    <h2 className='mt-5 text-xl text-titleColor'>
                        Ecom Pinnacle
                    </h2>
                    <h3 className='text-sm text-[#F8A62B] my-2'>
                        Co-Founder
                    </h3>
                </div>
            </section>

            {/* Our values  */}
            <section className='my-40'>
                <OurValues />
            </section>

            <section className='container mx-auto my-20'>
                <div className="text-center w-[58rem] mx-auto">
                    <h1 className='text-5xl font-semibold my-10 text-titleColor'>Meet Our Expertise</h1>
                    <h3 className='text-textColor leading-loose'>Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. In lorem lacus quis egestas tincidunt neque ut accumsan.</h3>
                </div>
                <div className='grid grid-cols-4 gap-5 mt-40'>
                    <div>
                        <Image src={placeholderPersonImage} alt='Main Image' className='rounded-xl object-contain' />
                        <div className='bg-[#fc4db9] rounded-xl'>
                            <h3>Olivia Brown</h3>
                            <h4>Marketing Strategist</h4>
                        </div>
                    </div>
                    <div>
                        <Image src={placeholderPersonImage} alt='Main Image' className='rounded-xl' width={540} height={389} />
                    </div>
                    <div>
                        <Image src={placeholderPersonImage} alt='Main Image' className='rounded-xl' width={540} height={389} />
                    </div>
                    <div>
                        <Image src={placeholderPersonImage} alt='Main Image' className='rounded-xl' width={540} height={389} />
                    </div>
                </div>
            </section>
        </>
    )
}
