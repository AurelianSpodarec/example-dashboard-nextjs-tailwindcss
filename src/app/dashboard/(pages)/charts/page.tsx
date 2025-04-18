'use client'

import dataStock from "./dataStock";

import { Card } from "@/components/ui/card";
import StockChart from './_components/StockChart';

function DashboardChartsIndex() {
  return (
    <div>
      <header className="p-6">
        Stocks
      </header>
      <section className="p-6">
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 p-4">
            {dataStock.map((item, index) => <StockChart item={item} index={index} />)}
          </div>
        </Card>
      </section>
    </div>
  );
}

export default DashboardChartsIndex
