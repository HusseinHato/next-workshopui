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

export default function TransactionCard({
  name,
  price,
  date
}: {
  name: string;
  price: string;
  date: string;
}) {
  return (
    <Card className="w-full border border-gray-300 rounded-md">
      <CardContent className="p-4">
        <div className="flex flex-row">
          <div className="ms-3 flex flex-col flex-grow justify-between">
            <div className="w-full mt-12">
              <p className="font-bold text-xl">{name}</p>
              <p className="font-normal">{date}</p>
            </div>
            <div className="flex flex-row justify-end gap-x-3">
              <p>Total Price: <span className="font-bold">{price}</span></p>
              <Link href="/detailtransaction ">
              <button className="w-[100px] border border-gray-300 rounded-md hover:bg-gray-400 text-white bg-black">More</button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
