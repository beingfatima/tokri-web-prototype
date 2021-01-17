import { Dropdown } from 'bootstrap';
import { Button, Navbar, Nav, Col, Row, DropdownButton } from 'react-bootstrap';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavbarLogin=()=>{
  return(
    <div className="">
     

              <Navbar bg="dark" variant="dark" className="row">
                <Col sm={4} className="col-no-padding">
                  <Navbar.Brand href="/">Tokri.pk</Navbar.Brand>
                </Col>
                <Col className="form-inline col-no-padding" sm={6} >
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Categories
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Food</a>
                    <a className="dropdown-item" href="#">Grocery</a>
                    <a className="dropdown-item" href="#">Medicine</a>
                    <a className="dropdown-item" href="#">Electronic Devices</a>
                    <a className="dropdown-item" href="#">Computing & Gaming</a>
                  </div>
                </div>

                  <input type="text" className="form-control mr-sm-2" placeholder="Search" />
                  <Button variant="outline-info"><a href="search-page">Search</a></Button>                
                </Col >
                <Col sm={2} className="col-no-padding form-inline">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="profile">Profile</a>
                    <a className="dropdown-item" href="change-password">Change Password</a>
                    <a className="dropdown-item" href="order-history">Order History</a>
                    <a className="dropdown-item" href="login">Logout</a>
                  </div>
                </div>
                  <Nav className="">
                    <Nav.Link href="cart-login"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                  </Nav>
                </Col>
            </Navbar>
        

    </div>
  );
}

export default NavbarLogin;
