import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogCard() {
  return (
    <Card className="w-[360px] border-0">
      <a href="/exampleblog">
        <CardHeader className="p-0">
            <img
              src="gambar/gambar-blog.jpg"
              alt="gambarblog"
              className="rounded-md"
            />
        </CardHeader>
        <CardContent className="p-1">
          <div>
            <div className="flex flex-row gap-x-3 mb-3 mt-4 font-semibold">
                <p>Basketball</p>
                <p>/</p>
                <p>5 min read</p>
            </div>
            <p className="mb-2 font-extrabold text-xl">Lamelo Ball the Uprising Basketball Young-Star, Shining off and on the pitch </p>
            <p className="mb-2 font-semibold">By Admin</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic numquam, iste aperiam ex accusantium quidem quisquam possimus ... </p>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
