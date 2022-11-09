import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import Searchicon from "@material-ui/icons/Search";

export function Header(props) {
    

    return (
        <nav className='header'>
            <Link to="/">
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
            
            </Link>

            {/* search box */}
            <div className="header__search">
            <input type="text" className="header__searchinput" />
            <Searchicon className="header__searchIcon" />
            </div>
            

            
        </nav>
    )
}
