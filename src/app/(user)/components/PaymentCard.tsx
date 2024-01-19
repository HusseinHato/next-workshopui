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

export default function PaymentCard({
  source,
  name,
  price,
}: {
  source: string;
  name: string;
  price: string;
}) {

  return (
    <Card className="w-full border border-gray-300 rounded-md">
      <CardContent className="p-4">
        <div className="flex flex-row">
          <div>
            <img
              src={source}
              alt="testing"
              className="rounded-md w-[200px] h-[258px]"
            />
          </div>
          <div className="ms-3 flex flex-col flex-grow justify-between">
            <a href="/detilproduk" className="w-full mt-12">
              <div>
                <p className="font-bold text-xl">{name}</p>
                <p className="font-medium">{price}</p>
              </div>
            </a>
            <div className="flex flex-row justify-end gap-x-3">
              <p>Quantity : 1</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
