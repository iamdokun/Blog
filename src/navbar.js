import {Link} from 'react-router-dom'
const Navbar = () => {
    const navStyle = {
        color: "#fff",
        backgroundColor:"#f1356d",
        borderRadius:"8px"
    }
    return ( 
        <div className="navbar">
            <div className="head-text">Abiodun's Blog</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">Create Blog</Link>
                <Link to="/About" style={navStyle}>About</Link>
            </div>
        </div>
     );
}
 
export default Navbar;