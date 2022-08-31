import React from "react";

//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

import "../App.css";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userInput:"",
      list:[
        {id:42423,value:"Hello",status:1}
      ]
    }
  }

  updateInput(value) {
    this.setState({
      userInput:value
    });
  }

  addItem() {
    if( this.state.userInput !== '' ) {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
        status: 0
      }
      const list = [...this.state.list];
      list.push(userInput);
      this.setState({
        list,
        userInput:"",
        status:0
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter( item => item.id !== id );
    this.setState({
      list:updatedList
    });
  }

  toggleItem(id) {
    const list = [...this.state.list];
    const toggleList = list.filter( item => item.id == id );
    if(toggleList.status==0) {
      toggleList.status=1;
    } else {
      toggleList.status=0;
    }
    list.push(toggleList);
    this.setState({
      list:list
    })
  }

  render() {

    let listItem;
    this.state.list.map( item => { 
      if(item.status==1) { 
        listItem = <Form.Check type="checkbox" style={{display:"inline-block",marginRight:"10px"}} checked onChange={()=>this.ToggleItem(item.id)}></Form.Check>; 
      } else {
        listItem = <Form.Check type="checkbox" style={{display:"inline-block",marginRight:"10px"}}></Form.Check>;
      }
    });

    return(
      <Container>
        <Row style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize: "3rem",
          fontWeight:"bold"
        }}>TODO LIST</Row>
        <hr/>
        <Row>
          <Col md={{span:5,offset:4}}>
            <InputGroup className="mb-3">
              <FormControl placeholder="add item..." size="lg" value={this.state.userInput} onChange={item=>this.updateInput(item.target.value)} />
              <Button variant="dark" size="lg" onClick={()=>this.addItem()}>ADD</Button>
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={{span:5,offset:4}}>
            <ListGroup>
              {this.state.list.map( item => { return(
                <ListGroup.Item variant="dark" style={{height:"50px",fontSize:"20px"}}>
                  {listItem}
                  {item.value}
                  <Button variant="danger" style={{position:"absolute",right:"5px",top:"5px"}} onClick={()=>this.deleteItem(item.id)}>Delete</Button>
                </ListGroup.Item>
              )})}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;