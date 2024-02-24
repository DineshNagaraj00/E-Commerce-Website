import React from 'react'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';


function Nav() {
  return (
    <div className='container'>
      <div className="top"></div>
        <div className="nav">
          <h1>Thara Fashion</h1>
            <ul>
            <li>Shop</li>
            <li>Deals</li>
            <li>About Us</li>
            <li>Wishlist</li>
            <li>Account</li>
            </ul>
                <div className="input">
                  <input type="text"  placeholder='Search'/>
                  <SearchIcon/>
                </div>
                <div className="header__right">
                  <FavoriteBorderIcon className='favorite__icon'/>
                  <PersonOutlineIcon  className='person' />
                  <LocalGroceryStoreIcon className='cart'/>

                </div>

        </div>
    </div>
  )
}

export default Nav