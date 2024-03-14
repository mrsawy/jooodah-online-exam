import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PieChart } from "@mui/x-charts/PieChart";
import { Chart } from "primereact/chart";

import formatResults from "../../utils/formatResults";
import formatPieChart from "../../utils/formatPieChart";

export default function BasicPieChart({ label, data, className }) {
  const { users } = useSelector((s) => s.user);
  let results = formatPieChart({ users });
  // return (
  //   <div className={"flex justify-center items-center  " + className}>
  //     <PieChart
  //       series={[
  //         {
  //           data: results,
  //         },
  //       ]}
  //       width={400}
  //       height={200}
  //     />
  //   </div>
  // );
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});


  console.log(results)
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: results.map((result) => result?.label),
      datasets: [
        {
          data: results.map((result) => result?.value),
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex justify-content-center mt-16">
      <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
    </div>
  );
}
