import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "/lib/fetcher";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ProductBreakdown = (fryerLocation) => {
  const [seriesData, setData] = useState([{ name: 'Location 1', data: [200]}])
  const [axisData, setXData] = useState(['Model 1']);
  
  const { data } = useSWR(`/api/location?store=${fryerLocation.fryerLocation}&type=product`, fetcher);

  useEffect(() => {
    const productCount = [];
    const labels = [];
    if (Array.isArray(data)) {
      data?.forEach((p) => {
        productCount.push(p.count);
        labels.push(p.product)
      });
    }
    setData(productCount);
    setXData(labels);
  }, [data, fryerLocation])
  
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
      labels: axisData,
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Product Breakdown</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Products Cooked
        </CardSubtitle>
        <Chart
          type="donut"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        />
      </CardBody>
    </Card>
  );
};

export default ProductBreakdown;
