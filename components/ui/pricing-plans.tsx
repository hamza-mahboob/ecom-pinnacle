import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Plan {
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice?: number;
    link: string;
    features: string[];
}

interface PricingProps {
    pricingPlans: Plan[];
}

const Pricing = ({ pricingPlans }: PricingProps) => {
    const [billingCycle, setBillingCycle] = useState<'M' | 'A'>('M');

    const Heading = () => (
        <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
            <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center">
                <div className="mb-2 inline-block rounded-full bg-primaryColor px-3 py-[0.30rem] text-xs font-medium uppercase text-white">
                    {' '}
                    Pricing
                </div>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200">
                    Fair pricing, unfair advantage.
                </p>
                <p className="text-md max-w-xl text-gray-700 md:text-center">
                    Get started with <span className='text-primaryColor font-semibold tracking-wide'>Ecom Pinnacle</span> today and take your business to the next level.
                </p>
            </div>
            {/* <div className="flex items-center justify-center gap-3">
                <button
                    onClick={() => setBillingCycle('M')}
                    className={cn(
                        `rounded-lg px-4 py-2 text-sm font-medium `,
                        billingCycle === 'M'
                            ? 'relative bg-primaryColor text-white '
                            : 'text-gray-700 hover:bg-secondaryColor  dark:hover:text-black',
                    )}
                >
                    Monthly
                    {billingCycle === 'M' && <BackgroundShift shiftKey="monthly" />}
                </button>
                <button
                    onClick={() => setBillingCycle('A')}
                    className={cn(
                        `rounded-lg px-4 py-2 text-sm font-medium `,
                        billingCycle === 'A'
                            ? 'relative bg-primaryColor text-white '
                            : 'text-gray-700 hover:bg-secondaryColor  dark:hover:text-black',
                    )}
                >
                    Annual
                    {billingCycle === 'A' && <BackgroundShift shiftKey="annual" />}
                </button>
            </div> */}
        </div>
    )

    const PricingCards = () => (
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
            {pricingPlans.map((plan, index) => (
                <div
                    key={index}
                    className="w-full rounded-xl border-[1px] border-gray-300 p-6 text-left dark:border-gray-600"
                >
                    <p className="mb-1 mt-0 text-sm font-medium uppercase text-primaryColor">
                        {plan.name}
                    </p>
                    <p className="my-0 mb-6 text-sm text-gray-600">{plan.description}</p>
                    <div className="mb-8 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                                className="my-0 text-3xl font-semibold text-secondaryColor text-opacity-90"
                            >
                                <span>
                                    €{billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                                </span>
                                {/* <span className="text-sm font-medium">
                                    /{billingCycle === 'M' ? 'month' : 'year'}
                                </span> */}
                            </motion.p>
                        </AnimatePresence>
                        <Link href={plan.link}>
                            <motion.button
                                whileTap={{ scale: 0.985 }}
                                // onClick={() => {
                                //     window.open(plan.link)
                                // }}
                                className="mt-8 w-full rounded-lg bg-primaryColor py-2 text-sm font-medium text-white hover:bg-primaryColor/90"
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </div>
                    <div className='overflow-y-auto h-60 custom-scrollbar'>
                        {plan.features.map((feature, idx) => (
                            <div key={idx} className="mb-3 flex items-center gap-2">
                                <Check className="text-secondaryColor" size={18} />
                                <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )

    return (
        <section className="relative w-full overflow-hidden py-12 text-black lg:px-2 lg:py-12">
            <Heading />
            <PricingCards />
        </section>
    );
}

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
    <motion.span
        key={shiftKey}
        layoutId="bg-shift"
        className="absolute inset-0 -z-10 rounded-lg bg-primaryColor"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    />
)

export default function PricingPage({ pricingPlans }: PricingProps) {
    return <Pricing pricingPlans={pricingPlans} />;
}