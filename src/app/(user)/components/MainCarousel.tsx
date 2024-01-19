import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export function MainCarousel() {
  return (
    <Carousel className="w-full max-w-4xl mt-6">
      <CarouselContent className="rounded-md">
          <CarouselItem key={1}>
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center p-0">
                    <img src="hero/hero1.png" alt="hero1" className="rounded-md"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={2}>
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center p-0">
                    <img src="hero/hero2.png" alt="hero2" className="rounded-md"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key={3}>
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center p-0">
                    <img src="hero/hero3.png" alt="hero3" className="rounded-md"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}