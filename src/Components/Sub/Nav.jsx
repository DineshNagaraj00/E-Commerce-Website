import React from 'react'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';




function Nav() {
  const history=useNavigate();
  
  function handleCheck() {
    history('/Shop')
  }
  return (
    <div className='container'>
      <div className="top"></div>
        <div className="nav">
          <Link to='/'>
          <h1>Thara Fashion</h1>
          </Link>
            <ul>
            <li onClick={handleCheck}>Shop</li>
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