import { Button } from "react-bootstrap";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";

const AdminShops=()=>{
  return(
    <div className="">
        <NavbarAdmin />
            <div className="container justify-content-center">
                <div className="row m-5"  style={{'backgroundColor':'lightgray'}}>
                <div className="col-12 m-5">
                    <ul style={{'listStyleType':'none', 'textAlign':'center'}}>
                                <li className="p-3"><a href="view-shop">View Shop</a></li>
                                <li className="p-3"><a href="create-shop">Create Shop</a></li>
                                <li className="p-3"><a href="update-shop">Update Shop</a></li>
                                <li className="p-3"><a href="remove-shop">Remove Shop</a></li>
                    </ul>
                </div>
                </div>
            </div>
        
    </div>
  );
}

export default AdminShops;
