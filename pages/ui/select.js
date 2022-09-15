import React from "react";
import { Card, CardBody, CardTitle} from "reactstrap";


const Data = [
  {
    store: "01490",
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
    store: "01490",
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
    store: "01490",
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
    store: "01490",
    model : "PFE500",
    serial: "AA2008031",
    status: "complete",
    cycles: "16176",
    errors: "0",
    filtration: "10",
    oil: "3436",
    service: "12/1/21"
  },
  {
    store: "02173",
    model : "PFE500",
    serial: "AA1806130",
    status: "complete",
    cycles: "61267",
    errors: "361",
    filtration: "6",
    oil: "1636",
    service: "5/25/19"
  },
  {
    store: "02173",
    model : "CFE415",
    serial: "LF1710020",
    status: "pending",
    cycles: "71417",
    errors: "0",
    filtration: "9",
    oil: "6553",
    service: "5/25/19"
  },
];

class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Data,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
     
      <Card>
      <CardBody>
        <CardTitle tag="h5">All Store Data </CardTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                      </th>
                  <th scope="col">Store Number</th>
                  <th scope="col">Model Number</th>
                  <th scope="col">Serial Number</th>
                  <th scope="col">Status</th>
                  <th scope="col">Total Cycles</th>
                  <th scope="col"># of Errors</th>
                  <th scope="col">Daily Filter Count</th>
                  <th scope="col">Total Oil Wear</th>
                  <th scope="col">Last Service Date</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                {this.state.List.map((tdata, index) => (
                  <tr key={index} className={tdata.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={tdata.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, tdata)}
                      />
                    </th>
                    <td>{tdata.store}</td>
                    <td>{tdata.model}</td>
                    <td>{tdata.serial}</td>
                    <td>{tdata.status}</td>
                    <td>{tdata.cycles}</td>
                    <td>{tdata.errors}</td>
                    <td>{tdata.filtration}</td>
                    <td>{tdata.oil}</td>
                    <td>{tdata.service}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn btn-primary"
              onClick={() => this.getSelectedRows()}
            >
              Get Selected Items {this.state.SelectedList.length} 
                </button>
               
                  <button style={{marginLeft: 5}}
              className="btn btn-primary"
              
            >
             Download Report 
                  </button>
                  
            {/* <div className="row">
              <b>All Row Items:</b>
              <code>{JSON.stringify(this.state.List)}</code>
            </div>
            <div className="row">
              <b>Selected Row Items(Click Button To Get):</b>
              <code>{JSON.stringify(this.state.SelectedList)}</code>
            </div> */}
          </div>
            </div>
            
          </div>
          </CardBody>
    </Card>
    );
  }
}

export default SelectTableComponent;
