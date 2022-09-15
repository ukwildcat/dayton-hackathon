import Image from "next/image";
import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table, DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

const tableData = [
  {
    model : "PFE500",
    serial: "AA2006123",
    status: "complete",
    cycles: "13669",
    errors: "48",
    filtration: "10",
    oil: "660",
    service: "1/7/20"
  },
  {
    model : "PFE500",
    serial: "AA2008047",
    status: "pending",
    cycles: "15581",
    errors: "0",
    filtration: "9",
    oil: "166",
    service: "3/10/22"
  },
  {
    model : "PFE500",
    serial: "AA2008027",
    status: "failed",
    cycles: "14700",
    errors: "61",
    filtration: "5",
    oil: "56",
    service: "N/A"
  },
  {
    model : "PFE500",
    serial: "AA2008031",
    status: "complete",
    cycles: "16176",
    errors: "0",
    filtration: "10",
    oil: "3436",
    service: "12/1/21"
  },
];



const ProjectTables = () => {

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

const toggle = () => setDropdownOpen((prevState) => !prevState);
const Handletoggle = () => {
  setIsOpen(!isOpen);
};
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Store Data </CardTitle>
        {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of the projects
        </CardSubtitle> */}
        <div className="table-responsive">
       
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                
                <th>Model Number </th>
                <th>Serial Number</th>
                <th>Status</th>
                <th># of Cycles</th>
                <th># of Errors</th>
                <th>Daily Filter Count</th>
                <th>Total Oil Wear</th>
                <th>Last Service Date</th>
                
          
                
                {/* <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th> */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      {/* <Image
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      /> */}
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.model}</h6>
                        {/* <span className="text-muted">{tdata.email}</span> */}
                      </div>
                    </div>
                  </td>
                  <td>{tdata.serial}</td>
                  <td>
                    {tdata.status === "failed" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3" />
                    ) : tdata.status === "pending" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3" />
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3" />
                    )}
                  </td>
                  <td>{tdata.cycles}</td>
                  <td>{tdata.errors}</td>
                  <td>{tdata.filtration}</td>
                  <td>{tdata.oil}</td>
                  <td>{tdata.service}</td>
                  
                  
                </tr>
               
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectTables;
