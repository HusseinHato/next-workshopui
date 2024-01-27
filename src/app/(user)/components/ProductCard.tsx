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

export default function ProductCard({ source, name, price }: { source: string; name: string; price: string }) {
  return (
    <Card className="w-full md:w-[280px]">
      <Link href="/detilproduk">
        <CardHeader>
          <img src={source} alt="dunklow" className="rounded-sm w-full md:w-[230px] h-[288px]" />
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-sm md:text-base">{name}</p>
            <p className="text-sm md:text-base">{price}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
