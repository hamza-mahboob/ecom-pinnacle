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
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";


interface MyCarouselProps {
  images: { src: StaticImageData, alt: string, width?: number, height?: number, myClass?: string, basis?: string, cardText: string, cardBody: string }[]
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
              <Card className="max-w-[400px] h-80 bg-white rounded-xl p-2">
                <CardHeader className="flex gap-3">
                  <Image
                    alt={image.alt}
                    height={80}
                    // radius="sm"
                    src={image.src}
                    width={80}
                  />
                </CardHeader>
                <CardBody>
                  <p className="text-2xl font-bold text-[#331B3B]">{image.cardText}</p>
                </CardBody>
                <CardFooter>
                  <h3 className="text-textColor text-md text-start font-light">
                    {image.cardBody}
                  </h3>
                </CardFooter>
              </Card>
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
