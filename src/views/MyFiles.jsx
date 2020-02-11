import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import Chips from 'react-chips';
import "../app.css";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container
} from "reactstrap";

import profilImg from 'assets/img/faces/joe-gardner-1.jpg';
const dataTable = [
  ["Tiger Nixon", "System Architect", ["Edinburgh"]],
  ["Garrett Winters", "Accountant", ["Tokyo"]],
  ["Ashton Cox", "Junior Technical Author", ["San Francisco"]],
  ["Cedric Kelly", "Senior Javascript Developer", ["Edinburgh"]],
  ["Airi Satou", "Accountant", ["Tokyo"]],
  ["Brielle Williamson", "Integration Specialist", ["New York"]],
  ["Herrod Chandler", "Sales Assistant", ["San Francisco"]],
  ["Colleen Hurst", "Javascript Developer", ["San Francisco"]],
  ["Rhona Davidson", "Integration Specialist", ["Tokyo"]],
  ["Sonya Frost", "Software Engineer", ["Edinburgh"]],
  ["Jena Gaines", "Office Manager", ["London"]],
  ["Quinn Flynn", "Support Lead", ["Edinburgh"]],
  ["Charde Marshall", "Regional Director", ["San Francisco"]],
  ["Paul Byrd", "Chief Financial Officer (CFO)", ["New York"]],
  ["Haley Kennedy", "Senior Marketing Designer", ["London"]],
  ["Tatyana Fitzpatrick", "Regional Director", ["London"]],
  ["Michael Silva", "Marketing Designer", ["London"]],
  ["Gloria Little", "Systems Administrator", ["New York"]],
  ["Bradley Greer", "Software Engineer", ["London"]],
  ["Dai Rios", "Personnel Lead", ["Edinburgh"]],
  ["Jenette Caldwell", "Development Lead", ["New York"]],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", ["New York"]],
  ["Caesar Vance", "Pre-Sales Support", ["New York"]],
  ["Doris Wilder", "Sales Assistant", ["Sidney"]],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", ["London"]],
  ["Gavin Joyce", "Developer", ["Edinburgh"]],
  ["Jennifer Chang", "Regional Director", ["Singapore"]],
  ["Brenden Wagner", "Software Engineer", ["San Francisco"]],
  ["Fiona Green", "Chief Operating Officer (COO)", ["San Francisco"]],
  ["Shou Itou", "Regional Marketing", ["Tokyo"]],
  ["Michelle House", "Integration Specialist", ["Sidney"]],
  ["Suki Burks", "Developer", ["London"]],
  ["Prescott Bartlett", "Technical Author", ["London"]],
  ["Gavin Cortez", "Team Leader", ["San Francisco"]],
  ["Martena Mccray", "Post-Sales support", ["Edinburgh"]],
  ["Unity Butler", "Marketing Designer", ["San Francisco"]],
  ["Howard Hatfield", "Office Manager", ["San Francisco"]],
  ["Hope Fuentes", "Secretary", ["San Francisco"]],
  ["Vivian Harrell", "Financial Controller", ["San Francisco"]],
  ["Timothy Mooney", "Office Manager", ["London"]],
  ["Jackson Bradshaw", "Director", ["New York"]],
  ["Olivia Liang", "Support Engineer", ["Singapore"]]
];

class MyFiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: this.prop,
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          name: (
            <table>
              <tbody>
                  <tr>
                    <td>
                    <div style={{marginRight: 20}} className="img-container">
                    <img alt="..." src={profilImg} 
                    style={{minWidth: 50,height: 50,width: 50, borderRadius: "100%"}}
                    />
                    </div>
                  </td>
                  <td className="td-name">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      {prop[0]}
                    </a>
                  </td>
              </tr>
              </tbody>
            </table>
            ),
            position: prop[1],
            office: prop[2][0],
          manage: (
            <div className="actions-left">
              <Container className="themed-container"  fluid="sm">
              <Button  color="info" block
                // onClick={() => {
                //   let obj = this.state.data.find(o => o.id === key);
                // }}
                >
                Manage
              </Button>
              </Container>
            </div>
          ),
          tag : (
            <div className="chipInput">
              <Chips
                // renderChip={value => <CustomChip>{value}</CustomChip>}
                value = {prop[2]}  // {this.state.chips}
                // onChange={(event) => this.onChipChange(event,prop[2])}
                suggestions={["London", "New York", "Singapore","San Francisco", "Edinburgh", "Sydney", "Tokyo"]}
              />
            </div>
          ),
          edit: (
          <div style={{margin: "0px auto" }} >Edit Tag</div>
          )
        };
      })
    };
  }
  onChipChange = (event, chips) => {
    chips.push(chips);
    alert(event.target.value);
    // this.props[2].push();
    // this.setState({ chips });
    // document.location.reload();
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
            <h3 className="manageUser" >MANAGE USERS</h3>
              <Card>
                <CardHeader>
                  <Button outline 
                    color="primary" 
                    size="sm"
                    style={{
                      borderRadius: 5,
                      marginTop: 0,
                      marginBottom: 0
                    }}
                  >Add User</Button>
                </CardHeader>
                <CardBody>
                  <ReactTable 
                    data={this.state.data}
                    columns={[
                              {Header: "Name",accessor: "name", maxwidth: 100, minWidth: 70},
                              {Header: "Position", accessor : "position", className: "positionCol", maxWidth: 200},
                              {Header: "Office", accessor : "office", className: "officeCol", maxWidth: 150},
                              {Header: "Actions", accessor: "manage", sortable: false, className: "actionCol", width: 120}, 
                              {Header: "Tag",  accessor: "tag", sortable: false, className: "tagCol", width:200 ,minwidth: 100},
                              {accessor: "edit", sortable: false, maxWidth: 100, className:"editCol" }
                            ]}
                    defaultPageSize={10}
                    showPaginationBottom

                    /*
                      You can choose between primary-pagination, info-pagination, success-pagination, warning-pagination, danger-pagination or none - which will make the pagination buttons gray
                    */
                    className=" -highlight primary-pagination myFileTable"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default MyFiles;


              /* use this button to remove the data row */
              /* <Button
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                size="sm"
                className="btn-icon btn-link remove"
              >
                <i className="fa fa-times" />
              </Button>{" "} */

              