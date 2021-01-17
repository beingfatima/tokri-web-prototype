import NavbarFunc from "../../Navbar/NavbarFunc";

const ForgotPassword=()=>{
  return(
    <div className="">
          <NavbarFunc />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" >
                    <form className="text-left">
                      <h3 className="mt-5 mb-1">&nbsp;Forgot your password?</h3>
                      <p className="mt-5 mb-1">&nbsp;Enter your email</p>
                      <input type="email" className="form-control m-2" placeholder="Email" ></input>
                      <a href="otp-verification" style={{'textDecoration':'none'}}>
                        <input type="button" className="form-control m-2" value="Next"></input>
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

export default ForgotPassword;
