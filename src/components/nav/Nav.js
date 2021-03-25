import "./Nav.css"
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="nav-bar">
            <div className="logo" id="logo"></div>
            <div className="search-bar">
                <input className="search-input"/>
                <button className="btn-search"></button>
            </div>
            <div className="auth-section">
                <button className="btn-sign-in"><Link className="link" to="/signin">Sign in</Link></button>
                <button className="btn-sign-up"><Link className="link" to="/signup">Sign up</Link></button>
            </div>
        </nav>
    );
}