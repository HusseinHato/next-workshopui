import React from "react";
import CartCard from "../components/CartCard";

export default function page() {
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="flex justify-center mb-6 mt-6">
        <p className="text-3xl font-bold">Cart</p>
      </div>
      <div className="flex flex-row gap-x-4 mb-4 rounded-lg">
        <div className="flex flex-col gap-y-3 flex-grow">
          <CartCard
            source="gambar/kdtrey.png"
            name="KD Trey 5"
            price="Rp. 1.699.000"
          />
          <CartCard
            source={"gambar/dunklow.png"}
            name={"SB Dunk Low Panda"}
            price={"Rp. 2.299.000"}
          />
        </div>
        <div className="flex flex-col gap-y-3 border border-gray-300 p-4 rounded-lg h-fit w-[450px]">
          <p className="text-xl font-bold">Summary</p>
          <div className="flex flex-row justify-between text-lg">
            <p className="font-medium">Total</p>
            <p className="font-extrabold">Rp. 3.599.000</p>
          </div>
          <a href="/payment" className="border text-white bg-gray-800 p-4 mb-2 rounded-xl hover:bg-gray-400 flex justify-center">
            <button className="">
              Checkout
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
