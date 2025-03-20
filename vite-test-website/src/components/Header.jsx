import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header container">
            <img src={Logo} alt="" />
       
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul> </div>
    );
  }
  
  export default Header;
  