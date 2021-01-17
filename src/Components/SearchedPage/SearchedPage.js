import pro from '../../products'
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import NavbarFunc from '../Navbar/NavbarFunc';

const SearchedPage=(props)=>{
  return(
    <> 
    <NavbarFunc />
    <div className="row">
        <div className="col-sm-3 pb-5 pt-5">
            <FilterSidebar/>
        </div>
        <div className="col-sm-9 pb-5 pt-5">
            <div className="row justify-content-left ml-4">
                Sort by:&nbsp;
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Relevance
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Relevance</a>
                    <a class="dropdown-item" href="#">Price high to low</a>
                    <a class="dropdown-item" href="#">Price low to high</a>
                    </div>
                </div>
            </div>

            <DisplayProducts data={pro}/>
        </div>

    </div>
    </>
  );
}

export default SearchedPage;
