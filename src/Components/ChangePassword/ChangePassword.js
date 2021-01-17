import NavbarLogin from "../NavbarLogin/NavbarLogin";
const ChangePassword=()=>{
  return(
    <div className="">
          <NavbarLogin />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" style={{'textDecoration':'none'}}>
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;Change Password</h3>
                    <input type="password" className="form-control m-2" placeholder="Current Password"></input>
                    <input type="password" className="form-control m-2" placeholder="New Password"></input>
                    <a href="change-password" style={{'textDecoration':'none'}}>
                      <input type="button" className="form-control m-2" value="Update"></input>
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

export default ChangePassword;
