import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const AdminRemoveBarcode=()=>{
  return(
    <div className="">
        <NavbarAdmin />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" style={{'textDecoration':'none'}}>
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;Remove an entry</h3>
                    <input type="text" className="form-control m-2" placeholder="Barcode"></input>
                    <input type="password" className="form-control m-2" placeholder="Admin's password" ></input>
                    <a href="remove-barcode-entry" style={{'textDecoration':'none'}}>
                      <input type="button" style={{'backgroundColor':'lightgray'}}className="form-control m-2" value="Delete Entry!"></input>
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

export default AdminRemoveBarcode;
