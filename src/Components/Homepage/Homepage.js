import pro from '../../products'
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import Middle from '../Middle/Middle';
import NavbarFunc from '../Navbar/NavbarFunc';
const Homepage=(props)=>{
  return(
    <div className="">
        <NavbarFunc />
        <Middle />
        <h2 className="m-4">Popular Items</h2>
        <DisplayProducts data={pro}/>

    </div>
  );
}

export default Homepage;
