import { Button } from "react-bootstrap";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";

const AdminBarcodes=()=>{
  return(
    <div className="">
        <NavbarAdmin />
            <div className="container justify-content-center">
                <div className="row m-5"  style={{'backgroundColor':'lightgray'}}>
                <div className="col-12 m-5">
                    <ul style={{'listStyleType':'none', 'textAlign':'center'}}>
                                <li className="p-3"><a href="view-barcodes-list">View Barcodes list</a></li>
                                <li className="p-3"><a href="add-barcode-entry">Add entry</a></li>
                                <li className="p-3"><a href="remove-barcode-entry">Remove Entry</a></li>
                                <li className="p-3"><a href="update-barcode-entry">Edit Entry</a></li >
                    </ul>
                </div>
                </div>
            </div>
        
    </div>
  );
}

export default AdminBarcodes;
