import { Transaction } from "@prisma/client";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { weiToEth, weiToMatic } from "../../core/web3/currency";

interface ChartProps {
  transactions?: Transaction[];
}

export const PriceHistoryChart = (props: ChartProps) => {
  const [chart, setChart] = useState<Chart | undefined>(undefined);

  useEffect(() => {
    let data: number[] = [];
    let dates: string[] = [];
    for (const trans of props.transactions!) {
      try {
        data.push(parseFloat(weiToEth(trans.price!)));
        dates.push(
          new Date(parseInt(trans.timeStamp!) * 1000).toLocaleDateString()
        );
      } catch (error) {
        console.log(error);
      }
    }
    let chartStatus = Chart.getChart("historyChart"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    var ctx = (document!.getElementById("historyChart") as any).getContext(
      "2d"
    )!;
    if (!ctx) return;
    setChart(
      new Chart(ctx, {
        type: "bar",
        options: {
          responsive: true,
          scales: {
            y: {
              ticks: { color: "white" },
            },
            x: {
              ticks: { color: "white" },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
        data: {
          labels: dates,
          datasets: [
            {
              data: data,
              label: "Applied",
              borderColor: "#ffffff",
              backgroundColor: "#ffffff",
            },
          ],
        },
      })
    );
  }, [props.transactions]);

  return (
    <div className="w-full  bg-black p-4" id="historyChartContainer">
      <div>
        <canvas id="historyChart" height="300"></canvas>
      </div>
    </div>
  );
};
