import { Button } from "react-bootstrap";
import NavbarFunc from "../Navbar/NavbarFunc";

const ProductInfo=()=>{
  return(
    <div className="">
        <NavbarFunc />
        <div className="container">
            <div className="row p-5">
                <div className="col-8" style={{'background-color':'gray'}}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className="">Product image</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
                <div className="col-4" style={{'background-color':'lightgray'}}>
                    <br></br><br></br><br></br><br></br>
                    <ul style={{'listStyleType':'none'}}>
                                <li><h3>Product name</h3></li>
                                <li>Product Description</li>
                                <li>Stock: In stock</li>
                                <li>Price: PKR 500</li>
                                <li><Button variant="primary">Add to Cart</Button></li>
                                
                            </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProductInfo;
