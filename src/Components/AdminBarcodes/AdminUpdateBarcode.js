import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const AdminUpdateBarcode=()=>{
  return(
    <div className="">
        <NavbarAdmin />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" style={{'textDecoration':'none'}}>
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;Update Entry</h3>
                    <input type="text" className="form-control m-2" placeholder="Existing Barcode"></input>
                    <input type="text" className="form-control m-2" placeholder="New Barcode"></input>
                    <input type="text" className="form-control m-2" placeholder="New Name" ></input>
                    <a href="update-barcode-entry" style={{'textDecoration':'none'}}>
                      <input type="button" style={{'backgroundColor':'lightgray'}}className="form-control m-2" value="Update Entry"></input>
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

export default AdminUpdateBarcode;
