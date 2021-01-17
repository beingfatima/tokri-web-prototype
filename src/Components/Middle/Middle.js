import "./Middle.css"

const Middle=()=>{
  return(
    <div className="">
        <div class="container-fluid">
            <div className="row middle-row">
                <div className="col-3  pb-5 pt-5" style={{'backgroundColor': 'lightgray'}}>
                    <ul style={{'listStyleType':'none', 'textAlign':'left'}}>
                        <li><a href="#">Food</a></li>
                        <li><a href="#">Grocery</a></li>
                        <li><a href="#">Medicine</a></li>
                        <li><a href="#">Electronic Devices</a></li>
                        <li><a href="#">Computing & Gaming</a></li>
                    </ul>
                </div>
                <div className="col-9">
                  <h1>Website Banner</h1>
                </div>
            </div>
            </div>

    </div>
  );
}

export default Middle;
