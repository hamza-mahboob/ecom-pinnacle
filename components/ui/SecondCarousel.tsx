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
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"

interface MyCarouselProps {
  images: { src: string | StaticImageData , alt: string, width?: number, height?: number, myClass?: string, basis?: string, title?: string, description?: string }[]
}

export default function SecondCarousel({ images }: MyCarouselProps) {
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

  const cards = [
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
  ]

  return (
    <div className={`relative`}>
      <Carousel setApi={setApi} className="">
        <CarouselContent className="p-1">
          {images.map((card, index) => (
            <div className="w-[420px] h-[365px] bg-white">

            </div>
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
