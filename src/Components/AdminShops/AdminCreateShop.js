import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const AdminCreateShop=()=>{
  return(
    <div className="">
        <NavbarAdmin />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" style={{'textDecoration':'none'}}>
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;Create a new shop</h3>
                    <input type="text" className="form-control m-2" placeholder="Shop's Full name"></input>
                    <input type="email" className="form-control m-2" placeholder="Email" ></input>
                    <input type="text" className="form-control m-2" placeholder="Contact Number" ></input>
                    <textarea className="form-control m-2" placeholder="Shop's Full Address"></textarea>
                    <input type="password" className="form-control m-2" placeholder="Password" ></input>
                    <input type="password" className="form-control m-2" placeholder="Confirm Password" ></input>
                    <a href="create-shop" style={{'textDecoration':'none'}}>
                      <input type="button" style={{'backgroundColor':'lightgray'}}className="form-control m-2" value="Register Shop"></input>
                    </a>                  
                    </form>
                </div>

                <div className="col-4">
                </div>

            </div>
        </div>
    </div>
  );
}

export default AdminCreateShop;
