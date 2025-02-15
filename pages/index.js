import Head from "next/head";
import { Col, Row } from "reactstrap";
import SalesChart from "../src/components/dashboard/SalesChart";
import Feeds from "../src/components/dashboard/Feeds";
import ProjectTables from "../src/components/dashboard/ProjectTable";
import TopCards from "../src/components/dashboard/TopCards";
import SelectTableComponent from "/pages/ui/select"
import { useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "/lib/fetcher";
import { AlignCenter } from "react-feather";

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

  const { data } = useSWR("/api/fryers?type=all", fetcher);

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div>
      <Head>
        <title>FRYNET</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      
      
        {/***Top Cards***/}
        {/* <Row>
          <Col sm="6" lg="3">
           
              <TopCards
               title="FRYNET"
              
               
               icon={FrynetLogo}
              />
          </Col>
          </Row> */}
        {/* <Image src={FrynetLogo} alt="icons" className="img-frynet" /> */}
          {/* <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="Refund given"
              earning="$1k"
              icon="bi bi-coin"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="New Project"
              subtitle="Yearly Project"
              earning="456"
              icon="bi bi-basket3"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-into"
              title="Sales"
              subtitle="Weekly Sales"
              earning="210"
              icon="bi bi-bag"
            />
          </Col>*/}
        {/* </Row>  */}
        <Row>
          <Col lg="12" sm="12">
          <SelectTableComponent />
          </Col>
          </Row>
        {/***Sales & Feed***/}
        <Row>
          {/* <Col sm="12" lg="6" xl="7" xxl="8">
            <SalesChart fryerData={data} />
          </Col> */}
          {/* <Col sm="12" lg="6" xl="5" xxl="4">
            <Feeds />
          </Col> */}
        </Row>
        {/***Table ***/}
       <div>
        
          </div>
        {/***Blog Cards***/}
        {/* <Row>
          {BlogData.map((blg) => (
            <Col sm="6" lg="6" xl="3" key={blg.title}>
              <Blog
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
            </Col>
          ))}
        </Row> */}
      </div>
    </div>
  );
}
