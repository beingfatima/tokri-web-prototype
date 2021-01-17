import NavbarLogin from "../NavbarLogin/NavbarLogin";
const ProfileUpdate=()=>{
  return(
    <div className="">
          <NavbarLogin />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" style={{'textDecoration':'none'}}>
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;My Profile</h3>
                    <input type="text" className="form-control m-2" placeholder="Name" value="Fatima Ibrahim"></input>
                    <input type="email" className="form-control m-2" placeholder="Email" value="beingfatima9@gmai.com"></input>
                    <input type="text" className="form-control m-2" placeholder="Contact Number" value="+921234567574"></input>
                    <textarea className="form-control m-2" placeholder="">ABC Street Karachi Pakistan</textarea>
                    <a href="profile" style={{'textDecoration':'none'}}>
                      <input type="button" className="form-control m-2" value="Save"></input>
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

export default ProfileUpdate;
