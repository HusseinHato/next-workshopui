"use client";
import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container max-w-6xl mx-auto mb-6">
      <div className="mt-3">
        <Carousel className="w-full">
          <CarouselContent>
              <CarouselItem key={1}>
                <div className="p-1">
                  <Card>
                    <CardContent className="w-full p-0">
                      <img src="kdtrey/kdtrey1.jpeg" alt="kdtrey1" className="md:w-[568px] md:h-[568px] rounded-md object-cover" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem key={2}>
                <div className="p-1">
                  <Card>
                    <CardContent className="w-full p-0">
                      <img src="kdtrey/kdtrey2.png" alt="kdtrey2" className="md:w-[568px] md:h-[568px] rounded-md object-cover" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem key={3}>
                <div className="p-1">
                  <Card>
                    <CardContent className="w-full p-0">
                      <img src="kdtrey/kdtrey3.png" alt="kdtrey3" className="md:w-[568px] md:h-[568px] rounded-md object-cover" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem key={4}>
                <div className="p-1">
                  <Card>
                    <CardContent className="w-full p-0">
                      <img src="kdtrey/kdtrey4.png" alt="kdtrey4" className="md:w-[568px] md:h-[568px] rounded-md object-cover" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem key={5}>
                <div className="p-1">
                  <Card>
                    <CardContent className="w-full p-0">
                      <img src="kdtrey/kdtrey5.jpeg" alt="kdtrey5" className="md:w-[568px] md:h-[568px] rounded-md object-cover" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem key={6}>
                <div className="p-1">
                  <Card>
                    <CardContent className="w-full p-0">
                      <img src="kdtrey/kdtrey6.png" alt="kdtrey6" className="md:w-[568px] md:h-[568px] rounded-md object-cover" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-col p-4">
        <p className="text-lg font-semibold">KD Trey 5</p>
        <p className="text-2xl font-bold mb-2">Basketball Shoes</p>
        <p className="text-xl font font-medium">Rp. 1.799.000</p>
        <div className="mt-4">
          <p className="font-medium text-lg mb-2">Select Size</p>
          <ToggleGroup.Root
            className="grid grid-cols-4 gap-3"
            type="single"
            defaultValue="40"
          >
            {Array(16)
              .fill(1)
              .map((el, i) => (
                <div className="border border-black h-[50px] flex flex-col items-center justify-center rounded-md hover:bg-gray-400">
                  <ToggleGroup.Item
                    value={`${40 + 0.5 * i}`}
                    className="data-[state=on]:bg-black data-[state=on]:text-white w-full h-full data-[state=on]:hover:bg-gray-600"
                  >
                    <p className="text-md font-semibold">{`${40 + 0.5 * i}`}</p>
                  </ToggleGroup.Item>
                </div>
              ))}
          </ToggleGroup.Root>
        </div>
        <div className="mt-4 mb-6">
          <p className="font-semibold text-lg">Detail Produk</p>
          <p className="font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            assumenda totam non voluptates officiis amet similique quisquam,
            voluptatum, vero sint sapiente eius veniam tenetur unde tempore
            quaerat quae asperiores iste maxime repellendus? Quaerat ipsa atque,
            mollitia adipisci voluptatem possimus dignissimos eum et nihil,
            facilis corporis perferendis soluta ex, nemo omnis necessitatibus.
            Esse, atque quis. Officia magnam nulla vitae aliquam ipsa minima
            necessitatibus consectetur, dolore laudantium itaque minus atque
            nobis molestiae facere accusantium non ex error labore sunt libero
            unde rerum veniam. Sint ipsa nostrum animi cupiditate molestiae.
            Veritatis quibusdam odio voluptates assumenda fugit ab delectus nam
            cupiditate, nulla laboriosam quasi!
          </p>
        </div>
        <button className="border text-white bg-gray-800 p-4 mb-2 rounded-xl hover:bg-gray-400">
          Add to Bag
        </button>
        <button className="border border-gray-400 hover:bg-gray-200 p-4 rounded-xl flex items-center justify-center gap-x-2 md:mb-0 mb-16">
          <span>Favourite</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 512 512"
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
