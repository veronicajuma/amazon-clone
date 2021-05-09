import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className = "header">
            <Link to = "/">
                <img  className = "header__logo"src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </Link>
            <div className = "header__search">
                
                    <input className = "header__input"  type = "text"/>
                    <SearchIcon className = "header__searchicon"/>
              
            </div>
            <div className = "header__navoptions">
                <Link className = "header__login" to = '/login'>
                <div className = "header__option">
                    <span className = "header__lineone">Hello Guest</span>
                    <span className = "header__linetwo">Sign In</span>
                </div>
                </Link>
                <div className = "header__option">
                    <span  className = "header__lineone">Returns</span>
                    <span className = "header__linetwo">& Orders</span>
                </div>
                <div className = "header__option">
                    <span  className = "header__lineone">Your</span>
                    <span className = "header__linetwo">Prime</span>
                </div>
                <Link className = "checkout__link" to = "/checkout">
                <div className = "header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className = "header__linetwo header__basketcount">{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
