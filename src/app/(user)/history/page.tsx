"use client";

import React from "react";
import TransactionCard from "../components/TransactionCard";

export default function page() {
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-6 mt-6">
        <p className="text-3xl font-bold">Transaction History</p>
      </div>
      <div className="flex flex-row gap-x-4 mb-4 rounded-lg">
        <div className="flex flex-col gap-y-3 flex-grow">
          <TransactionCard
            name="Transaction No. #113891"
            date="12 January 2024"
            price="Rp. 4.199.000"
          />
          <TransactionCard
            name={"Transaction No. #113154"}
            date="31 December 2024"
            price={"Rp. 3.799.000"}
          />
        </div>
      </div>
    </div>
  );
}
