import Head from "next/head";
import { Table, Row, Card, CardBody, CardTitle } from "reactstrap";
import useSWR from "swr";
import { fetcher } from "/lib/fetcher";

export default function Home() {
  const { data } = useSWR("/api/fryers?type=logs", fetcher);

  return (
    <div>
      <Head>
        <title>FRYNET</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/***Sales & Feed***/}
        <Row>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              All Logs
            </CardTitle>
            <CardBody className="">
              <div className="mt-3">
                <Table bordered>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Event</th>
                      <th>Date</th>
                      <th>Location</th>
                      <th>Model</th>
                      <th>S/N</th>
                      <th>Error Count</th>
                    </tr>
                    <tr>
                      <th>
                        <i className="bi bi-filter"></i>
                      </th>
                      <th>
                        <input type={"text"} />
                      </th>
                      <th>
                        <input type={"text"} />
                      </th>
                      <th>
                        <input type={"text"} />
                      </th>
                      <th>
                        <input type={"text"} />
                      </th>
                      <th>
                        <input type={"text"} />
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((log, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{log["event"]}</td>
                          <td>{log["timestamp"] ? new Date(log["timestamp"]).toLocaleDateString() : '' }</td>
                          <td>{log["location"]}</td>
                          <td>{log["modelnumber"]}</td>
                          <td>{log["serialnumber"]}</td>
                          <td>{log["errorcount"]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Row>
      </div>
    </div>
  );
}
