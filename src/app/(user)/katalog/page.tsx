"use client";
import React from 'react'
import ProductCard from '../components/ProductCard'
import * as Menubar from "@radix-ui/react-menubar";
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function page() {
  const [sortby, setSortby] = React.useState("Featured");

  return (
    <div className='container grid mx-auto w-full max-w-4xl'>
        <div className='my-4 rounded-md'>
            <img src="gambar/crop.jpeg" alt="katalog" className='brightness-50 rounded-md object-cover h-[300px] w-full'/>
            <p className=' text-white top-[40%] text-4xl font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'>Basketball</p>
        </div>
        <div className="mb-4 flex flex-row justify-end sticky top-[110px] z-[98] bg-white p-4 rounded-md shadow-md border border-gray-300">
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
                        value="Featured"
                        className="w-full p-3 hover:bg-gray-200 rounded-md text-end data-[highlighted]:outline-none"
                      >
                        Featured
                      </Menubar.RadioItem>
                    </button>
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
        <div className="grid grid-cols-3 gap-x-2 gap-y-4 mb-8">
          <ProductCard source={"gambar/kdtrey.png"} name={"KD Trey 5"} price={"Rp. 1.699.000"}/>
          <ProductCard source={"gambar/kdtrey.png"} name={"KD Trey 5"} price={"Rp. 1.699.000"}/>
          <ProductCard source={"gambar/kdtrey.png"} name={"KD Trey 5"} price={"Rp. 1.699.000"}/>
          <ProductCard source={"gambar/kdtrey.png"} name={"KD Trey 5"} price={"Rp. 1.699.000"}/>
          <ProductCard source={"gambar/kdtrey.png"} name={"KD Trey 5"} price={"Rp. 1.699.000"}/>
          <ProductCard source={"gambar/kdtrey.png"} name={"KD Trey 5"} price={"Rp. 1.699.000"}/>
        </div>
        <div className="flex justify-center items-center mb-8">
          <button className="border border-gray-300 py-4 px-8 hover:bg-gray-200 rounded-md">More Products</button>
        </div>
    </div>
  )
}
