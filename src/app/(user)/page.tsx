"use client";

import Link from "next/link";
import { MainCarousel } from "./components/MainCarousel";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
      <div className='container grid mx-auto w-full max-w-4xl'>
        <div className="grid justify-center">
          <MainCarousel />
        </div>
        <div className="p-4 mt-4 flex flex-row items-center gap-x-3">
          <h3 className=" text-xl font-bold">Featured Products</h3>
          <Link href="/products">see all products</Link>
        </div>
        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
        </div>
        <div className="p-4 mt-4 flex flex-row items-center gap-x-3">
          <h3 className=" text-xl font-bold">Other Products</h3>
          <Link href="/products">see all products</Link>
        </div>
        <div className="grid grid-cols-3 gap-x-2 gap-y-4 mb-8">
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
          <ProductCard source={"gambar/dunklow.png"} name={"SB Dunk Low Panda"} price={"Rp. 2.299.000"}/>
        </div>
        <div className="flex justify-center items-center mb-8">
          <button className="border border-gray-300 py-4 px-8 hover:bg-gray-200 rounded-md">More Products</button>
        </div>
      </div>
  )
}
