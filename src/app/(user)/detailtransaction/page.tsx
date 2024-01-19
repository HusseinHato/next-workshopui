"use client";

import React from "react";
import PaymentCard from "../components/PaymentCard";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function page() {
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-6 mt-6">
        <p className="text-3xl font-bold">Transaction Detail</p>
        <p className="font-medium">No. #112317</p>
      </div>
      <div className="flex flex-row gap-x-4 mb-4 rounded-lg">
        <div className="flex flex-col gap-y-3 flex-grow">
          <PaymentCard
            source="gambar/kdtrey.png"
            name="KD Trey 5"
            price="Rp. 1.699.000"
          />
          <PaymentCard
            source={"gambar/dunklow.png"}
            name={"SB Dunk Low Panda"}
            price={"Rp. 2.299.000"}
          />
        </div>
        <div className="flex flex-col rounded-lg h-fit w-[450px]">
          <div className="p-4 border border-gray-300 rounded-t-lg flex flex-col gap-y-2">
            <p className="text-xl font-bold">Address</p>
            <p className="font-medium">
              Jl. Jembatan Kuningan Blok G No. 22, Surabaya, East Java,
              Indonesia, 61257
            </p>
            <div className="flex flex-row justify-between text-lg">
              <p className="font-medium">Selected Delivery Options</p>
              <p className="font-bold">Express</p>
            </div>
          </div>
          <div className="p-4 border border-gray-300 flex flex-col gap-y-2">
            <p className="text-xl font-bold">Payment Option</p>
            <div className="flex flex-row justify-between text-lg">
              <p className="font-medium">Selected Payment</p>
              <p className="font-bold">Paypal</p>
            </div>
          </div>
          <div className="p-4 border border-gray-300 rounded-b-lg flex flex-col gap-y-2">
            <p className="text-xl font-bold">Products Price</p>
            <div className="flex flex-row justify-between text-lg">
              <p className="font-medium">Total Price</p>
              <p className="font-bold">Rp. 3.599.000</p>
            </div>
            <div className="flex flex-row justify-between text-lg">
              <p className="font-medium">Insurance Fee</p>
              <p className="font-bold">Rp. 5.300</p>
            </div>
            <div className="flex flex-row justify-between text-lg">
              <p className="font-medium">Delivery Fee</p>
              <p className="font-bold">Rp. 125.000</p>
            </div>
            <div className="flex flex-row justify-between text-lg">
              <p className="font-medium">Service Fee</p>
              <p className="font-bold">Rp. 2.500</p>
            </div>
            <hr className="mt-2 mb-2" />
            <div className="flex flex-row justify-between text-lg">
              <p className="font-bold">Total Bill</p>
              <p className="font-extrabold">Rp. 3.599.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
