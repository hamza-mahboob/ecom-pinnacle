'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"

interface MyCarouselProps {
  images: { src: StaticImageData, alt: string, width?: number, height?: number, myClass?: string, basis?: string }[]
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
    <div className={`relative ${images[0].myClass}`}>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className={`${images[0].basis}`}>
              <Card>
                <CardContent className="flex items-center justify-center ring-0 outline-none border-none">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width || 800}  // Default width 800px
                    height={image.height || 600}  // Default height 600px
                    className="object-cover w-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute -bottom-20 md:bottom-2 right-20 md:-left-40 flex space-x-6">
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
