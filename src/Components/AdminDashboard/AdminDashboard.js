import { Button } from "react-bootstrap";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";

const AdminDashboard=()=>{
  return(
    <div className="">
            <NavbarAdmin />
            <div className="container">
                <div className="row m-5"  style={{'backgroundColor':'lightgray'}}>
                    <h2>Admin Dashboard</h2>
                </div>
                <div className="row m-5"></div>
                <div className="row m-5"></div>
            </div>
    </div>
  );
}

export default AdminDashboard;
