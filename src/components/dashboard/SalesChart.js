import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesChart = (fryerData) => {
  const [seriesData, setData] = useState([{ name: 'Fryer 1', data: [200]}])
  const [axisData, setXData] = useState(['Model 1']);
  useEffect(() => {
    console.log(fryerData);
    console.log(Array.isArray(fryerData.fryerData));
    const locations = [];
    const data = [];
    fryerData.fryerData?.forEach((fryer) => {
      if (!locations.find((l) => l === fryer.serialnumber))
        locations.push(fryer.serialnumber);

      data.push({ name: fryer.location, data: [fryer.events]})
    });
    setData(data);
    setXData(locations);
  }, [fryerData])
  
  const chartoptions = {
    series: seriesData,
    options: {
      chart: {
        type: "bar",
        height: 350,
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
        <CardTitle tag="h5">Fryer Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Events by Fryer
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

export default SalesChart;
