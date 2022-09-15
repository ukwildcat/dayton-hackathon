import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ErrorOilChart = (fryerLocation) => {
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
    series: seriesData,
    options: {
      chart: {
        type: "bar",
        height: 200,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
        borderColor: "rgba(0,0,0,0.1)",
      },

      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        categories: axisData,
        dataLabels: 'TEST'
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Oil Filtration Stats</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Model Numbers by Location
        </CardSubtitle>
        <Chart
          type="bar"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        />
      </CardBody>
    </Card>
  );
};

export default ErrorOilChart;
