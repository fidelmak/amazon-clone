import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import Searchicon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

export function Header(props) {
    

    return (
        <nav className='header'>
            <Link to="/">
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
            
            </Link>

            {/* search box */}
            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <Searchicon className="header__searchIcon" />

            </div>
            {/* actual nav */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className='header__link'>
                <div className="header__option">

                <span className='header__optionLineOne'>Hello Paul</span>
                <span className='header__optionLineTwo'>Sign In</span>
                </div>
                
                
                
                </Link>

                {/* 2nd link */}
                <Link to="/" className='header__link'>
                <div className="header__option">

                <span className='header__optionLineOne' >Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
                </div>
                </Link>
                {/* 3rd link */}
                <Link to="/login" className='header__link'>
                <div className="header__option">

                <span className='header__optionLineOne'>Your </span>
                <span className='header__optionLineTwo'>Prime</span>
                </div>
                </Link>
                {/* 4th link  */}

                 <Link to="/checkout" className='header__link'>
                    <div className="header__optionBasket">
                        {/* shopping item basket */}
                        <ShoppingBasketIcon />
                        {/* number of items  */}
                        <span className='header__optionLineTwo header__basketCount'>0</span>
                    </div>
                 </Link>
                  
            </div>
            

            
        </nav>
    )
}
