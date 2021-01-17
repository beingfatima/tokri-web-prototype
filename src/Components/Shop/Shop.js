import pro from '../../products'
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import NavbarFunc from '../Navbar/NavbarFunc';

const Shop=()=>{
  return(
    <div className="">
        <NavbarFunc />
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-5" style={{'backgroundColor': 'lightgray'}}>
                    <h1>Shop banner</h1>
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-3 text-left">
                            <ul style={{'listStyleType':'none'}}>
                                <li><h3>Shop Name</h3></li>
                                <li>Rating 4.2/5</li>
                                <li>Reviews (47)</li>
                                <li>Address</li>
                            </ul>
                        </div>
                        <div className="col-9">
                        </div>
                    </div>
                    <hr style={{'backgroundColor': 'lightgray'}}></hr>

                    <div className="row">
                        <h2 className="" >&nbsp;&nbsp;&nbsp;All Products</h2>
                        <DisplayProducts data={pro}/>
                    </div>
                </div>
            </div>
            </div>
    </div>
  );
}

export default Shop;
