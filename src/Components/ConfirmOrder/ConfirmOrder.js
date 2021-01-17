import { Button } from "react-bootstrap";
import NavbarLogin from "../NavbarLogin/NavbarLogin";

const ConfirmOrder=()=>{
  return(
    <div className="">
            <NavbarLogin />
        <div className="container">
            <div className="row">
                <div className="col">
                <h3 className="text-left mt-4">Shipping Info</h3>
                    <ul style={{'listStyleType':'none', 'textAlign':'left'}}>
                        <li>Fatima Ibrahim</li>
                        <li>Contact Number</li>
                        <li>Address</li>
                        <li>Karachi</li>
                        <li>Any special instructions? No</li>
                        <li>Delivery option: Cash on Delivery</li>
                    </ul>
                </div>
            </div>

            <div className="row">
            <div className="col">
            <h3 className="text-left mt-4">Your order</h3>
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
                </tbody>
            </table>
            </div>
            </div>
            <div className="row">
            <div className="col">
            <h3 className="text-left mt-4">Order Summary</h3>
            <table className="table text-left table-bordered">
                <thead style={{'background-color':'lightgray'}}>
                    <tr>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Cart</td>
                    <td>PKR 10,000</td>
                    </tr>

                    <tr>
                    <th scope="row">2</th>
                    <td>Shipping Charges</td>
                    <td>PKR 200</td>
                    </tr>

                    <tr>
                    <th scope="row">3</th>
                    <td>Total</td>
                    <td>PKR 10,200</td>
                    </tr>

                    <tr>
                    </tr>
                </tbody>
            </table>
        <a href="confirm-order"><input type="button" style={{'backgroundColor':'lightgray'}} className="form-control m-2" value="Place Order"></input></a>
        <br></br>
        </div>
            </div>

        </div>
    </div>
  );
}

export default ConfirmOrder;
