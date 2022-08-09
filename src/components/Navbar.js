import {Link} from  "react-router-dom";

function Navbar(){
    return(
        <>
        <nav>
            <Link to={"/"} exact="true">Home</Link>
            <Link to={"/about"} exact="true">About</Link>
            <Link to={"/items"} exact="true">Items</Link>
            
        </nav>
        </>
    )
    
}
export default Navbar