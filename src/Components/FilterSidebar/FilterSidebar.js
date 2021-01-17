
const FilterSidebar=()=>{
  return(
                <div style={{'backgroundColor': 'lightgray'}}>
                    <ul style={{'listStyleType':'none', 'textAlign':'left'}}>Categories
                        <li><a href="#">Food</a></li>
                        <li><a href="#">Grocery</a></li>
                        <li><a href="#">Medicine</a></li>
                        <li><a href="#">Electronic Devices</a></li>
                        <li><a href="#">Computing & Gaming</a></li>
                    </ul>
                    <ul style={{'listStyleType':'none', 'textAlign':'left'}}>Ratings
                        <li><a href="#">5 stars</a></li>
                        <li><a href="#">4 stars</a></li>
                        <li><a href="#">3 stars</a></li>
                        <li><a href="#">2 stars</a></li>
                        <li><a href="#">1 star</a></li>
                    </ul>
                    <ul style={{'listStyleType':'none', 'textAlign':'left'}}>Price
                        <li><a href="#">$</a></li>
                        <li><a href="#">$$</a></li>
                        <li><a href="#">$$$</a></li>
                    </ul>
                </div>

  );
}

export default FilterSidebar;
