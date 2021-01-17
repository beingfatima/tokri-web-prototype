import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const AdminUpdateShop=()=>{
  return(
    <div className="">
        <NavbarAdmin />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" style={{'textDecoration':'none'}}>
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;Update the shop's info</h3>
                    <input type="text" className="form-control m-2" placeholder="Shop's Existing ID"></input>
                    <input type="text" className="form-control m-2" placeholder="Shop's New Name"></input>
                    <input type="email" className="form-control m-2" placeholder="New Email" ></input>
                    <input type="text" className="form-control m-2" placeholder="New Contact Number" ></input>
                    <textarea className="form-control m-2" placeholder="Shop's New Address"></textarea>
                    <input type="password" className="form-control m-2" placeholder="Current Password" ></input>
                    <a href="create-shop" style={{'textDecoration':'none'}}>
                      <input type="button" style={{'backgroundColor':'lightgray'}}className="form-control m-2" value="Update Shop"></input>
                    </a>                  
                    </form>
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;Update shop's password</h3>
                    <input type="password" className="form-control m-2" placeholder="Shop's Old Password"></input>
                    <input type="password" className="form-control m-2" placeholder="New Password "></input>
                    <input type="password" className="form-control m-2" placeholder="Confirm Password" ></input>
                    <a href="create-shop" style={{'textDecoration':'none'}}>
                      <input type="button" style={{'backgroundColor':'lightgray'}}className="form-control m-2" value="Update Shop's Password"></input>
                    </a>                  
                    </form>
                    <br></br>
                </div>

                <div className="col-4">
                </div>

            </div>
        </div>
    </div>
  );
}

export default AdminUpdateShop;
