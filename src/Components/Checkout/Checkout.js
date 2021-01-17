import NavbarLogin from "../NavbarLogin/NavbarLogin";
const Checkout=()=>{
  return(
    <div className="">
        <NavbarLogin />
        <div className="container">
        <div className="container">
            <div className="row">
            <h3 className="mt-5 mb-1">&nbsp;Shipping Details</h3>
            <table className="table ">
            <thead style={{'background-color':'lightgray'}}>
                <tr>
                </tr>
            </thead>
            
            <tbody className="text-right">
                  <tr><td>Name: </td><td ><input type="text" className="form-control w-50" placeholder="Name" value="Fatima Ibrahim"></input></td></tr>
                  <tr><td>Number: </td><td><input type="text" className="form-control w-50" placeholder="Contact Number" value="+921234567574"></input></td></tr>
                  <tr><td>City: </td><td><input type="text" className="form-control w-50" placeholder="City" value="Karachi" disabled></input></td></tr>
                  <tr><td>Address: </td><td><textarea className="form-control w-50" placeholder="">ABC Street Karachi Pakistan</textarea></td></tr>
                  <tr><td>Instructions: </td><td><textarea className="form-control w-50" placeholder="Any special instructions?"></textarea></td></tr>
                  <tr>
                    <td>Delivery Options: </td>
                    <td>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                        <label class="form-check-label" for="exampleRadios1">
                          Cash On Delivery
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td><td>
                    <div class="form-check text-left">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                      I agree to TOKRI's terms and conditions
                    </label>
                    </div></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                    <a href="confirm-order"><input type="button" style={{'backgroundColor':'lightgray'}} className="form-control m-2 w-50" value="Next"></input></a>
                    </td>
                  </tr>


             
                
                
            </tbody>
        </table>

               
               

            </div>
        </div>
    </div>
    </div>
  );
}

export default Checkout;
