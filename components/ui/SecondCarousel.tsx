'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"


interface MyCarouselProps {
  images: { src: StaticImageData, alt: string, width?: number, height?: number, myClass?: string, basis?: string, title: string, description: string }[]
}

export default function MyCarousel({ images }: MyCarouselProps) {
  const [api, setApi] = React.useState<any>()

  const scrollPrev = React.useCallback(() => {
    if (api) {
      api.scrollPrev()
    }
  }, [api])

  const scrollNext = React.useCallback(() => {
    if (api) {
      api.scrollNext()
    }
  }, [api])

  return (
    <div className={`relative`}>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((card, index) => (
            <CarouselItem key={index} className="lg:basis-5/12 basis-full">
              <div className="flex flex-col w-[338px] h-[294px] bg-white rounded-xl p-2 gap-6 justify-center md:-mr-40 ml-3 md:ml-0">
                <Image src={card.src} alt="temp" className="object-contain object-center" />
                <div className="flex flex-row justify-between px-2 ">
                  <h1 className="text-xl text-[#331B3B] font-semibold">{card.title}</h1>
                  <button className="border border-[#343434] px-4 text-sm rounded-full">{card.description}</button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute -bottom-16 md:bottom-2 right-20 md:-left-40 flex space-x-6">
        <Button variant="outline" size="icon" onClick={scrollPrev} className="outline-black outline outline-2 rounded-full h-8 w-8">
          <ChevronLeft className="h-7 w-7 " />
        </Button>
        <Button variant="outline" size="icon" onClick={scrollNext} className="outline-black outline outline-2 rounded-full h-8 w-8">
          <ChevronRight className="h-7 w-7" />
        </Button>
      </div>
    </div>
  )
}
