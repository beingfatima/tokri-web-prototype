import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const AdminBarcodeEntry=()=>{
  return(
    <div className="">
        <NavbarAdmin />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" style={{'textDecoration':'none'}}>
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;New Entry</h3>
                    <input type="text" className="form-control m-2" placeholder="Barcode"></input>
                    <input type="text" className="form-control m-2" placeholder="Name" ></input>
                    <a href="add-barcode-entry" style={{'textDecoration':'none'}}>
                      <input type="button" style={{'backgroundColor':'lightgray'}}className="form-control m-2" value="Submit Entry"></input>
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

export default AdminBarcodeEntry;
