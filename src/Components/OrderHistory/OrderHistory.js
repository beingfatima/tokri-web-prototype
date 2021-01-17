import { Button } from "react-bootstrap";
import NavbarFunc from "../Navbar/NavbarFunc";
import NavbarLogin from "../NavbarLogin/NavbarLogin";

const OrderHistory=()=>{
  return(
    <div className="">
            <NavbarLogin />
        <div className="container">
            <h3 className="text-left mt-4">My Orders</h3>
        <table className="table ">
            <thead style={{'background-color':'lightgray'}}>
                <tr>
                    <td>Order #</td>
                    <td>Date</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                <td>20034567</td>
                <td>15/01/21</td>
                <td>Pending</td>
                <td><a href="view-order"><input type="button" value="View Order"></input></a></td>
                </tr>
                <tr>
                <td>20034568</td>
                <td>15/01/21</td>
                <td>Complete</td>
                <td><a href="view-order"><input type="button" value="View Order"></input></a></td>
                </tr>
                <tr>
                <td>20034569</td>
                <td>15/01/21</td>
                <td>Complete</td>
                <td><a href="view-order"><input type="button" value="View Order"></input></a></td>
                </tr>
            </tbody>
        </table>

        </div>
    </div>
  );
}

export default OrderHistory;
