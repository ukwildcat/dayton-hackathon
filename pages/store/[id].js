import Head from "next/head";
import { Col, Row } from "reactstrap";
import ProjectTables from "/src/components/dashboard/ProjectTable";
import TopCards from "/src/components/dashboard/TopCards";
import DisplayCard from "/src/components/dashboard/DisplayCard";
import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "/lib/fetcher";
import { useRouter } from "next/router";
import ErrorCycleCount from "../../src/components/dashboard/ErrorCycleCount";
import ErrorOilChart from "../../src/components/dashboard/ErrorsOilChart";
import ProductBreakdown from "../../src/components/dashboard/ProductBreakdown";
// const BlogData = [
//   {
//     image: bg1,
//     title: "This is simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg2,
//     title: "Lets be simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg3,
//     title: "Don't Lamp blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg4,
//     title: "Simple is beautiful",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
// ];

export default function Home() {
    const router = useRouter();
  const { data } = useSWR(`/api/location?store=${router.query.id}`, fetcher);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Head>
        <title>FRYNET</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/***Top Cards***/}
        <Row>
          <Col sm="6" lg="6">
            <TopCards
              bg="bg-light-success text-success"
              title="Store"
              subtitle="Store location"
              location={router.query.id}
              address="1482 Miamisburg Centerville Rd, 
              Dayton, OH 45459 "
              phone="(937) 439-2552"
              operator="Marla Davis - Restaurant Operator"
              icon="bi bi-building"
            />
          </Col>

          <Col sm="6" lg="6">
            <DisplayCard
              bg="bg-light-warning text-warning"
              title="Current Monitoring Info"
              subtitle="Current Monitoring Information"
              errors="Errors: 109"
              cycles="Total Cook Cycles: 60126"
              totalunits="Total Store Units: 4"
              icon="bi bi-display"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12" sm="12">
            <ProjectTables />
          </Col>
        </Row>
        {/***Sales & Feed***/}
        <Row>
          <Col sm="12" lg="4">
            <ErrorCycleCount fryerLocation={data} />
          </Col>
          <Col sm="12" lg="4">
            <ErrorOilChart fryerLocation={data} />
          </Col>
          <Col sm="12" lg="4">
            { router.isReady && <ProductBreakdown fryerLocation={router.query.id} /> }
          </Col>
          {/* <Col sm="12" lg="6" xl="5" xxl="4">
            <Feeds />
          </Col> */}
        </Row>
      </div>
    </div>
  );
}
