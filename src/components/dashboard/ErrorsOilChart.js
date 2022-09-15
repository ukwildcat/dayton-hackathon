import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ErrorOilChart = (fryerLocation) => {
  const chartoptions = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF7754", "#247BA0"],
    series: [
      {
        name: "Errors",
        data: [
          10, 12, 8, 7, 8, 5, 3, 10, 12, 8, 9, 10, 13, 6, 9, 12, 9, 10, 12, 8,
          7, 8, 5, 8, 10, 12, 8, 9, 10, 13,
        ],
      },
    ],
    stroke: {
      width: [4, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    xaxis: {
      labels: { show: false }
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        labels: {
          style: {
            colors: "#FF7754",
          },
        },
        title: {
          text: "Filter Count",
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Oil Filtration Stats</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Daily Filter Count Last 30 Days
        </CardSubtitle>
        <Chart
          // type="line"
          width="100%"
          height="390"
          options={chartoptions}
          series={chartoptions.series}
        />
      </CardBody>
    </Card>
  );
};

export default ErrorOilChart;
