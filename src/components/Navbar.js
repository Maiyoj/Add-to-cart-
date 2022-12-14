import {Link} from  "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="flex justify-center space-x-7 pt-8 bg-indigo-500 h-24">
            <Link to={"/"} exact="true">Home</Link>
            <Link to={"/about"} exact="true">About</Link>
            <Link to={"/items"} exact="true">Items</Link>
        </nav>
        </>
    )
    
}
export default Navbar