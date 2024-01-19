import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({source, name, price}: {source: string, name:string, price:string}) {
  return (
    <Card className="w-[280px]">
      <a href="/detilproduk">
        <CardHeader>
          <img src={source} alt="dunklow" className="rounded-sm w-[230px] h-[288px]"/>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p>{name}</p>
            <p>{price}</p>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
