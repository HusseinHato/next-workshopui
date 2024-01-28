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
    <div className="container max-w-6xl mx-auto md:p-0 p-2">
      <div className="flex justify-center mb-6 mt-6">
        <p className="text-3xl font-bold">Payment</p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-4 mb-4 rounded-lg">
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
        <div className="flex flex-col rounded-lg h-fit md:w-[450px]">
          <div className="p-4 border border-gray-300 rounded-t-lg flex flex-col gap-y-2 mt-2 md:mt-0">
            <p className="text-xl font-bold">Address</p>
            <p className="font-medium">
              Jl. Jembatan Kuningan Blok G No. 22, Surabaya, East Java,
              Indonesia, 61257
            </p>
            <Select>
              <SelectTrigger className="w-full focus:ring-gray-200">
                <SelectValue placeholder="Select Delivery Options" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Delivery Options</SelectLabel>
                  <SelectItem value="regular" className="hover:bg-gray-200">Regular</SelectItem>
                  <SelectItem value="express" className="hover:bg-gray-200">Express</SelectItem>
                  <SelectItem value="instant" className="hover:bg-gray-200">Instant</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="p-4 border border-gray-300 flex flex-col gap-y-2 ">
            <p className="text-xl font-bold">Payment Option</p>
            <p className="font-medium">
              Select all Available Payment Method below
            </p>
            <Select>
              <SelectTrigger className="w-full focus:ring-gray-200">
                <SelectValue placeholder="Select Payment" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Payment Options</SelectLabel>
                  <SelectItem value="paypal" className="hover:bg-gray-200">Paypal</SelectItem>
                  <SelectItem value="visa" className="hover:bg-gray-200">Visa</SelectItem>
                  <SelectItem value="apple pay" className="hover:bg-gray-200">Apple Pay</SelectItem>
                  <SelectItem value="google pay" className="hover:bg-gray-200">Google Pay</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="p-4 border border-gray-300 rounded-b-lg flex flex-col gap-y-2 md:mb-0 mb-16">
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
            <hr className="mt-2 mb-2" />
            <button className="border text-white bg-gray-800 p-4 md:mb-2 rounded-xl hover:bg-gray-400">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
