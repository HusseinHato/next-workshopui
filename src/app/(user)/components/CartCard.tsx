"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CartCard({
  source,
  name,
  price,
}: {
  source: string;
  name: string;
  price: string;
}) {
  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card className="w-full border border-gray-300 rounded-md">
      <CardContent className="p-4">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center mr-3">
            <input type="checkbox" name="kdtrey" id="1" className="w-5 h-5 accent-gray-900" />
          </div>
          <div>
            <img
              src={source}
              alt="testing"
              className="rounded-md w-[200px] h-[258px]"
            />
          </div>
          <div className="ms-3 flex flex-col flex-grow justify-between">
            <Link href="/detilproduk" className="w-full mt-12">
              <div>
                <p className="font-bold text-xl">{name}</p>
                <p className="font-medium">{price}</p>
              </div>
            </Link>
            <div className="flex flex-row justify-end gap-x-3">
              <button className="text-gray-600 hover:text-indigo-600 focus:outline-none hover:bg-gray-200 p-4 rounded-md">
                <svg
                  className="fill-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </button>
              <div className="flex flex-row h-10 w-[150px] rounded-lg relative bg-transparent mt-1">
                <button
                  onClick={decreaseQuantity}
                  data-action="decrement"
                  className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span className="m-auto text-2xl font-extralight">−</span>
                </button>
                <div className="w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black flex items-center justify-center text-gray-700  outline-none">
                  <p>{quantity}</p>
                </div>
                <button
                  data-action="increment"
                  onClick={increaseQuantity}
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                >
                  <span className="m-auto text-2xl font-extralight">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
