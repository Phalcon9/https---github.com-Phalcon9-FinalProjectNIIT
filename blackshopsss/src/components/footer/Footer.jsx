import { Link } from "react-router-dom";
import "./styles.css"

const Footer = () => {
    return (<>
        <footer className="footer">
            <div className="F-container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <Link to='/track'>track my order</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                        </ul>

                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                        </ul>

                    </div>
                    <div className="footer-col">
                        <h4>shop</h4>
                        <ul>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <ul>
                            <li>
                                <Link to='/contact'> <i className="fab fa-facebook-f"></i> </Link>
                            </li>
                            <li>
                                <Link to='/contact'><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link to='/contact'><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li>
                                <Link to='/contact'><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;