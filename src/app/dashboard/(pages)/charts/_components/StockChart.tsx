'use client'

import { ResponsiveContainer, AreaChart, Area } from 'recharts';

interface IStockData {
  symbol: string;
  price: number;
  change: number;
  chart: { value: number }[];
}

interface IStockChartProps {
  item: IStockData;
  index: number;
}

function StockChart({ item, index }: IStockChartProps) {

  const isPositive = item.change >= 0;
  const upColor = "#00c950";
  const downColor = "#fb2c36";
  const color = isPositive ? upColor : downColor;
  const gradientId = `colorUv-${item.symbol}-${index}`;

  return (
    <div className="inline-flex w-full h-[50px]" key={item.symbol}>
      <div>
        <div className="text-sm font-semibold">{item.symbol.toUpperCase()}</div>
        <div className="text-sm">{item.price.toFixed(2)}</div>
      </div>

      <div className="flex flex-col w-full">
        <span className={`text-xs ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '+' : '-'}8.34 0.56%
        </span>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={70} data={item.chart}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                <stop offset="100%" stopColor={color} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              fill={`url(#${gradientId})`}
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              baseValue={isPositive ? 'dataMin' : 'dataMax'}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default StockChart
