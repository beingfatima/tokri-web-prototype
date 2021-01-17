import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const AdminViewBarcodesList=()=>{
  return(
    <div className="">
        <NavbarAdmin />
        <div className="container">
            <h3 className="text-left mt-4">View Barcodes list</h3>
        <table className="table ">
            <thead style={{'background-color':'lightgray'}}>
                <tr>
                    <th>Barcode</th>
                    <th>Name</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                <td>10000123467</td>
                <td>Product name</td>
                </tr>
            </tbody>
        </table>

        </div>
    </div>
  );
}

export default AdminViewBarcodesList;
