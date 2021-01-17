import NavbarFunc from "../../Navbar/NavbarFunc";

const Login=()=>{
  return(
    <div className="">
          <NavbarFunc />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" style={{'textDecoration':'none'}}>
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;Register</h3>
                    <input type="text" className="form-control m-2" placeholder="Name" ></input>
                    <input type="email" className="form-control m-2" placeholder="Email" ></input>
                    <input type="password" className="form-control m-2" placeholder="Password"></input>
                    <input type="password" className="form-control m-2" placeholder="Re-enter Password"></input>
                    <a href="login" style={{'textDecoration':'none'}}>
                      <input type="button" className="form-control m-2" value="Register"></input>
                    </a>                  
                    <br></br>
                    <p>&nbsp;&nbsp;Already have an account?<a href="login" style={{'textDecoration':'none'}}>&nbsp;Login!</a></p>

                    </form>
                </div>

                <div className="col-4">
                </div>

            </div>
        </div>
    </div>
  );
}

export default Login;
