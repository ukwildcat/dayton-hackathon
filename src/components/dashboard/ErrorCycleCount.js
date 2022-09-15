import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ErrorCycleCount = (fryerLocation) => {
  const [seriesData, setData] = useState([{ name: 'Location 1', data: [200]}])
  const [axisData, setXData] = useState(['Model 1']);
  useEffect(() => {
    console.log(fryerLocation);
    console.log(Array.isArray(fryerLocation.fryerLocation));
    const locations = [];
    const data = [];
    if (Array.isArray(fryerLocation.fryerLocation)) {
      fryerLocation?.fryerLocation?.forEach((location) => {
        if (!locations.find((l) => l === location.location))
          locations.push(location.location);

        data.push({ name: location.location, data: [location.events]})
      });
    }
    setData(data);
    setXData(locations);
  }, [fryerLocation])
  
  const chartoptions = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
      {
        name: "Errors",
        data: [6,5,9,10,7,4,2,3],
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
      categories: ["20", "30",'40', '50', '60', '70', '80', '90'],
      title: {
        text: "Cook Cycles (in thousands)"
      }
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#FF1654",
        },
        labels: {
          style: {
            colors: "#FF1654",
          },
        },
        title: {
          text: "Errors",
          style: {
            color: "#FF1654",
          },
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
        <CardTitle tag="h5">Errors vs Cook Cycles</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Model Numbers by Location
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

export default ErrorCycleCount;
