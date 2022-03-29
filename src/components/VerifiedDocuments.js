import React from 'react'
//import '../../css/wiseDaily.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallBeat } from 'react-pure-loaders';
import { setInterval } from 'core-js';
import { Button, CardBody,CardFooter,Card, CardHeader, Col, FormGroup, Input, Table,Label,InputGroup,InputGroupAddon,InputGroupText } from 'reactstrap';



class VerifiedDocument extends React.Component{
  constructor(props){
    super(props)
    this.state={
  }
}

onChange = (e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}

    render(){
    return(
      <Card className="textCapatalization">
      <h1>Hii</h1>
        <CardHeader className="headerBold">  <b>Verified Customer Documents</b>
        </CardHeader>
        <CardBody>
        <ToastContainer autoClose={3000}/>
            <Table style={{marginTop:"2%"}}>
              <thead>
                  <th style={{width:"20%"}}>Customer_id</th>
                  <th style={{width:"20%"}}>Customer_Name</th>
                  <th style={{width:"20%"}}>Loan Type</th>
                  <th style={{width:"20%"}}>Documents</th>
                  <th style={{width:"20%"}}>Status</th>
              </thead>
              </Table>
        </CardBody>
      </Card>
    );
   }
}
export default VerifiedDocument;