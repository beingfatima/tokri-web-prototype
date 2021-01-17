import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const AdminViewShops=()=>{
  return(
    <div className="">
        <NavbarAdmin />
        <div className="container">
            <h3 className="text-left mt-4">View all shops</h3>
        <table className="table ">
            <thead style={{'background-color':'lightgray'}}>
                <tr>
                    <th>Shop's ID</th>
                    <th>Shop's Name</th>
                    <th>Shop's Address</th>
                    <th>Shop's Email</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                <td>200123467</td>
                <td> ABC Shop</td>
                <td>Address </td>
                <td>abc@gmail.com </td>
                </tr>
            </tbody>
        </table>

        </div>
    </div>
  );
}

export default AdminViewShops;
