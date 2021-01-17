import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const AdminViewOrders=()=>{
  return(
    <div className="">
        <NavbarAdmin />
        <div className="container">
            <h3 className="text-left mt-4">Orders list</h3>
        <table className="table ">
            <thead style={{'background-color':'lightgray'}}>
                <tr>
                    <th>Order #</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                <td>200061234</td>
                <td>09/01/21</td>
                <td>
                    <input type="button" value="Pending"></input>
                    <input type="button" value="Process"></input>
                    <input type="button" value="Done"></input>
                    <input type="button" value="Cancel"></input>
                </td>
                <td><a href="admin-view-order"><input type="button" value="View Order"></input></a></td>
                </tr>
                <tr>
                <td>300061234</td>
                <td>10/01/21</td>
                <td>
                    <input type="button" value="Pending"></input>
                    <input type="button" value="Process"></input>
                    <input type="button" value="Done"></input>
                    <input type="button" value="Cancel"></input>
                </td>
                <td><a href="admin-view-order"><input type="button" value="View Order"></input></a></td>
                </tr>
            </tbody>
        </table>

        </div>
    </div>
  );
}

export default AdminViewOrders;
