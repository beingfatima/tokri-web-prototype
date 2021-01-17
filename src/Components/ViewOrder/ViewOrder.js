import { Button } from "react-bootstrap";
import NavbarLogin from "../NavbarLogin/NavbarLogin";

const ViewOrder=()=>{
  return(
    <div className="">
            <NavbarLogin />
        <div className="container">
            <h3 className="text-left mt-4">Items Ordered</h3>
        <table className="table ">
            <thead style={{'background-color':'lightgray'}}>
                <tr>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Item 1</td>
                <td>
                    Quantity: 2 
                    &nbsp;
                    <input type="button" value=" + "/>
                    &nbsp;
                    <input type="button" value=" - "/>
                </td>
                <td>PKR 2500</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Item 2</td>
                <td>
                    Quantity: 4
                    &nbsp;
                    <input type="button" value=" + "/>
                    &nbsp;
                    <input type="button" value=" - "/>
                </td>
                <td>PKR 5500</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Item 3</td>
                <td>
                    Quantity: 5
                    &nbsp;
                    <input type="button" value=" + "/>
                    &nbsp;
                    <input type="button" value=" - "/>
                </td>
                <td>PKR 6000</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>TOTAL 10,000</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="checkout"><input type="button" value="ReOrder"></input></a></td>
                </tr>
            </tbody>
        </table>

        </div>
    </div>
  );
}

export default ViewOrder;
