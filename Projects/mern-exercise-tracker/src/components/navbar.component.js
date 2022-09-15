import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md bg-dark navbar-dark px-5 py-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item px-3">
                        <Link to="/" className="navbar-brand">Exercises</Link>
                        </li>
                        <li className="nav-item px-3">
                        <Link to="/create" className="navbar-brand">Add Exercise</Link>
                        </li>
                        <li className="nav-item px-3">
                        <Link to="/user" className="navbar-brand">Add User</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;