import { useState } from "react";
import NavbarFunc from "../../Navbar/NavbarFunc";

const Login=()=>{
  const [login, setLogin] = useState(false);
 
  const onClickChange=()=>{
    setLogin(!login);
  }

  return(
    <div className="">
          <NavbarFunc />
        <div className="container">
          
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" >
                    <form className="text-left">
                    <h3 className="mt-5 mb-1">&nbsp;Login</h3>
                    <input type="email" className="form-control m-2" placeholder="Email" ></input>
                    <input type="password" className="form-control m-2" placeholder="Password"></input>
                    <p><a href="admin-login" style={{'textDecoration':'none'}}>&nbsp;&nbsp;Login as admin?</a></p>
                    <p><a href="forgot-password" style={{'textDecoration':'none'}}>&nbsp;&nbsp;Forgot your password?</a></p>
                    <a href="session-login" style={{'textDecoration':'none'}}>
                      <input type="button" className="form-control m-2" value="Login" onClick="onClickChange()" ></input>
                    </a>                  
                    <br></br>
                    <p>&nbsp;&nbsp;New to TOKRI.PK?<a href="register" style={{'textDecoration':'none'}}>&nbsp;Register Now!</a></p>
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
