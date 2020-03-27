import React, { Component } from "react";
import './Navbar.css';

class NavBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar my-navbar">
                <a className="navbar-brand item-bar">{this.props.title}</a>
                <div className="form-inline">
                    { this.props.withSearch ? 
                        <input className="form-control mr-sm-2"
                                type="search" onKeyDown={(e) => this.props.onKeySearch(e)}
                                placeholder="Pesquisa"
                            />
                    : null }
                    
                </div>
            </nav>
        );
    }
}

export default NavBar;