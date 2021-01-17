import { Dropdown } from 'bootstrap';
import { Button, Navbar, Nav, Col, Row } from 'react-bootstrap';

const NavbarFunc=()=>{
  return(
    <div className="">

              <Navbar bg="dark" variant="dark" className="row">
                <Col sm={4}>
                  <Navbar.Brand href="/">Tokri.pk</Navbar.Brand>
                </Col>
                <Col className="form-inline" sm={6}>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdown-menu">
                    <a className="dropdown-item" href="#">Food</a>
                    <a className="dropdown-item" href="#">Grocery</a>
                    <a className="dropdown-item" href="#">Medicine</a>
                    <a className="dropdown-item" href="#">Electronic Devices</a>
                    <a className="dropdown-item" href="#">Computing & Gaming</a>
                  </div>
                </div>
                  <input type="text" className="form-control mr-sm-2" placeholder="Search" />
                  <Button variant="outline-info"><a href="search-page">Search</a></Button>                
                </Col>
                <Col sm={2}>
      
                  <Nav className="form-inline">
                    <Nav.Link href="login">Login</Nav.Link>
                    <Nav.Link href="cart">Cart</Nav.Link>
                  </Nav>
                </Col>
            </Navbar>
        

    </div>
  );
}

export default NavbarFunc;
