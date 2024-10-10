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
import Image from "next/image"
import cimg from '../../app/public/imgs/MyCarousel img.png'

export default function MyCarousel() {
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
    <div className="relative w-full max-w-5xl">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center shadow-xl">
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <Image src={cimg} alt="Carousel Image" className="object-fill" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-2 -left-40 flex space-x-6">
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