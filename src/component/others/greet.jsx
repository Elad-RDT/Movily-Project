import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
class Greet extends Component {
    state = {
      inp:'',
      arr:[]
    } 
    render() { 
        return (
          <React.Fragment>

            <Navbar bg="warning" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                  >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Link
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                  <Button variant="dark">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <h1>hello</h1>
          <input type="text" on onChange={(e)=>this.val(e)}/> <button on onClick={(ev)=>this.list(ev)}>hey</button>
          <br />
      
            {this.state.arr.map(v=>
            <ol>
              <li>{v}</li>
            </ol>

            )
            }         
          
                    </React.Fragment>
          
            )
    }
    val=(e)=>{
      this.state.inp=e.target.value;
      this.setState({inp:this.state.inp})
      this.state.arr.push(this.state.inp);
      this.setState({arr:this.state.arr});
    }

    list=()=>{
      this.val()

    }

}
 
export default Greet;