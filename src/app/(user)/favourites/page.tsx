"use client";

import React from "react";
import ProductCard from "../components/ProductCard";
import * as Menubar from "@radix-ui/react-menubar";
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function page() {
  const [sortby, setSortby] = React.useState("Newest");

  return (
    <div className="container grid mx-auto w-full max-w-4xl p-2">
      <div className="p-8 mb-4 mt-4 flex flex-row justify-center">
        <h3 className="text-3xl font-bold">Favourites</h3>
      </div>
      <div className="mb-4 mt-4 flex flex-row justify-end sticky top-[110px] z-[98] bg-white p-4 rounded-md shadow-md border border-gray-300">
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger className="group hover:text-indigo-600 data-[highlighted]:ring-0 data-[highlighted]:outline-none flex items-center justify-between">
              Sort by: {sortby}
              <CaretDownIcon
              className="relative top-[1px] transition-transform ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
            </Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content
                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-md z-[99] border border-gray-300"
                sideOffset={20}
                align="end"
              >
                <Menubar.RadioGroup onValueChange={(value) => setSortby(value)}>
                  <div className="flex flex-col justify-end gap-y-1 w-[250px]">
                    <button>
                      <Menubar.RadioItem
                        value="Newest"
                        className="w-full p-3 hover:bg-gray-200 rounded-md text-end data-[highlighted]:outline-none"
                      >
                        Newest
                      </Menubar.RadioItem>
                    </button>
                    <button>
                      <Menubar.RadioItem
                        value="Oldest"
                        className="w-full p-3 hover:bg-gray-200 rounded-md text-end data-[highlighted]:outline-none"
                      >
                        Oldest
                      </Menubar.RadioItem>
                    </button>
                    <button>
                      <Menubar.RadioItem
                        value="Price: Low - High"
                        className="w-full p-3 hover:bg-gray-200 rounded-md text-end data-[highlighted]:outline-none"
                      >
                        Price: Low - High
                      </Menubar.RadioItem>
                    </button>
                    <button>
                      <Menubar.RadioItem
                        value="Price: High - Low"
                        className="w-full p-3 hover:bg-gray-200 rounded-md text-end data-[highlighted]:outline-none"
                      >
                        Price: High - Low
                      </Menubar.RadioItem>
                    </button>
                    {/* <a
                      href="#"
                      className="p-3 hover:bg-gray-200 rounded-md text-end"
                    >
                      Newest
                    </a>
                    <a
                      href="#"
                      className="p-3 hover:bg-gray-200 rounded-md text-end"
                    >
                      Price: Low - High
                    </a>
                    <a
                      href="#"
                      className="p-3 hover:bg-gray-200 rounded-md text-end"
                    >
                      Price: High - Low
                    </a> */}
                  </div>
                </Menubar.RadioGroup>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 mb-8">
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
        <ProductCard
          source={"gambar/dunklow.png"}
          name={"SB Dunk Low Panda"}
          price={"Rp. 2.299.000"}
        />
      </div>
      <div className="flex justify-center items-center mb-32 md:mb-10">
        <button className="border border-gray-300 py-4 px-8 hover:bg-gray-200 rounded-md">
          More Products
        </button>
      </div>
    </div>
  );
}
