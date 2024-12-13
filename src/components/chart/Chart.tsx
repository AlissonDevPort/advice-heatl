import { BarChart } from "@mui/x-charts/BarChart";

export default function Chart() {
  return (
    <BarChart
      sx={{
        ".css-175e1i1-MuiChartsAxis-root-MuiChartsYAxis-root .MuiChartsAxis-line,.css-175e1i1-MuiChartsAxis-root-MuiChartsYAxis-root .MuiChartsAxis-tick,.css-1x2wln8-MuiChartsAxis-root-MuiChartsXAxis-root .MuiChartsAxis-tick,.css-1x2wln8-MuiChartsAxis-root-MuiChartsXAxis-root .MuiChartsAxis-line":
          {
            stroke: "white !important",
          },
        ".MuiChartsAxis-tickLabel": {
          fill: "white !important",
        },
        ".MuiPopper-root .MuiChartsTooltip-root,.css-14hprqr-MuiPopper-root-MuiChartsTooltip-root":
          {
            color: "black !important",
          },
        ".MuiPopper-root .MuiChartsTooltip-root, .css-14hprqr-MuiPopper-root-MuiChartsTooltip-root":
          {
            color: "black !important",
          },
      }}
      series={[
        { data: [90, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={250}
      xAxis={[{ data: ["Janeiro", "Fevereiro", "Março"], scaleType: "band" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
