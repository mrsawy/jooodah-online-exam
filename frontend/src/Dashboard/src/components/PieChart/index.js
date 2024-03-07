import * as React from "react";
import { useSelector } from "react-redux";
import { PieChart } from "@mui/x-charts/PieChart";
import formatResults from "../../utils/formatResults";
import formatPieChart from "../../utils/formatPieChart";

export default function BasicPieChart({ label, data, className }) {
  const { users } = useSelector((s) => s.user);
  let results = formatPieChart({ users });
  return (
    <div className={"flex justify-center items-center  " + className}>
      <PieChart
        series={[
          {
            data: results,
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
}
