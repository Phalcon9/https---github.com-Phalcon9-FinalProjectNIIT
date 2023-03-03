import { Link } from "react-router-dom";


const Footer = () => {
    return (<>
        <footer className="footer">
            <div className="F-container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <li>
                            <Link to='/track'>track my order</Link>
                        </li>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <li>
                            <Link to='/contact'>contact</Link>
                        </li>
                    </div>
                    <div className="footer-col">
                        <h4>shop</h4>
                        <li>
                            <Link to='/contact'>contact</Link>
                        </li>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <li>
                            <Link to='/contact'>contact</Link>
                        </li>
                    </div>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;