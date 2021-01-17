import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const AdminViewSingleOrder=()=>{
  return(
    <div className="">
        <NavbarAdmin/>
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
                 
                </td>
                <td>PKR 2500</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Item 2</td>
                <td>
                    Quantity: 4
                  
                </td>
                <td>PKR 5500</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Item 3</td>
                <td>Quantity: 5 </td>
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
  );
}

export default AdminViewSingleOrder;
