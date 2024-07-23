import { NavLink } from "react-router-dom";
import "./HeaderComp.css";

export default function HeaderComp() {
    return (
        <>
            <div className="row">
                <div className="col-6 bg-primary">LOGO</div>
                <div className="col-6 bg-secondary">
                    <p>
                        <a href="/">Home</a> | 
                        <a href="/about">About</a> | 
                        <a href="/contact">Contact</a>
                    </p>

                    <p>
                        <NavLink to='/'>Home</NavLink> | 
                        <NavLink to='/about'>About</NavLink> | 
                        <NavLink to='/contact'>Contact</NavLink>
                    </p>

                    <button className="btn btn-primary">Button</button>
                </div>
            </div>
        </>
    )
}