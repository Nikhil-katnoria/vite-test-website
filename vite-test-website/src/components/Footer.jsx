import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="footer-menus">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
            </div>
        </div>
     
    );
  }
  
  export default Footer;
  