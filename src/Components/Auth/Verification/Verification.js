import NavbarFunc from "../../Navbar/NavbarFunc";

const Verification=()=>{
  return(
    <div className="">
          <NavbarFunc />
        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>

                <div className="col-4" >
                    <form className="text-left">
                      <h3 className="mt-5 mb-1">&nbsp;2-Step Verification - SMS</h3>
                      <p className="mt-5 mb-1">&nbsp;Enter the 4-digit code sent to your number</p>
                      <input type="text" className="form-control m-2" placeholder="Verification Code" ></input>
                      <a href="verify" style={{'textDecoration':'none'}}>
                        <input type="button" className="form-control m-2" value="Verify"></input>
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

export default Verification;
