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
              className="rounded-md md:w-[200px] md:h-[258px] w-[120px]"
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
              <p>Quantity : 1</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
