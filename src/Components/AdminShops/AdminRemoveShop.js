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
                    <h3 className="mt-5 mb-1">&nbsp;Remove a shop</h3>
                    <input type="text" className="form-control m-2" placeholder="Shop's ID"></input>
                    <input type="password" className="form-control m-2" placeholder="Password" ></input>
                    <a href="remove-shop" style={{'textDecoration':'none'}}>
                      <input type="button" style={{'backgroundColor':'lightgray'}}className="form-control m-2" value="Remove Shop"></input>
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
