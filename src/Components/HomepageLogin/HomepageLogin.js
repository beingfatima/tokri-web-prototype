import pro from '../../products'
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import Middle from '../Middle/Middle';
import NavbarLogin from '../NavbarLogin/NavbarLogin';
const Homepage=(props)=>{
  return(
    <div className="">
       <NavbarLogin />
        <Middle />
        <h2 className="m-4">Recommended Items</h2>
        <DisplayProducts data={pro}/>

    </div>
  );
}

export default Homepage;
