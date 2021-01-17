import { Dropdown } from 'bootstrap';
import { Button, Navbar, Nav, Col, Row, DropdownButton } from 'react-bootstrap';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavbarLogin=()=>{
  return(
    <div className="">
     

              <Navbar bg="dark" variant="dark" className="row justify-content-between">
                <Col sm={4} className="col-no-padding">
                  <Navbar.Brand href="/">Tokri.pk</Navbar.Brand>
                </Col>
                <Col sm={2} className="col-no-padding form-inline">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="admin-dashboard">Dashboard</a>
                    <a className="dropdown-item" href="admin-shops">Shops</a>
                    <a className="dropdown-item" href="admin-barcodes">Barcodes list</a>
                    <a className="dropdown-item" href="admin-orders">Orders</a>
                    <a className="dropdown-item" href="admin-login">Logout</a>
                  </div>
                </div>
                </Col>
            </Navbar>
        

    </div>
  );
}

export default NavbarLogin;
