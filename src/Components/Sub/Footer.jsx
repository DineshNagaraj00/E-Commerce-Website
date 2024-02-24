import React from 'react'
import './Footer.css'
import { Button } from '@mui/material'

function Footer() {
  return (
    <div className='footer'>
        <div className="line__one">
            <hr className='one' />
        </div>
        <div className="head">
            <h1>Be the First to Know Fashion</h1>
        </div>
        <div className="inputs">
            <input type="text"  placeholder='Full Name' className='one'/>
            <input type="text"  placeholder='Email' className='two'/>
            <Button>Subscribe now</Button>
        </div>

        <div className="content__left">
            <h1>Modify</h1>
            <p>Evalute your fashion game with modify, the  <br /> ultimate fashion customization
                app. Tailor <br /> look,embarce your creativity, and wear <br /> your unique style with pride.
            </p>
        </div>
        <div className="list__one">
            <h4>Shopping</h4>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Couple</li>
                <li>Bag</li>
                <li>Shoes</li>
                <li>Accessories</li>
            </ul>
        </div>
        <div className="list__two">
            <h4>Help</h4>
            <ul>
                <li>Customer support</li>
                <li>Terms & Conditions</li>
                <li>Delivery Details</li>
                <li>Privacy Policies</li>
                <li>Track Orders</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className="list__three">
            <h4>Company</h4>
            <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Carrers</li>
                <li>Site Map</li>
                <li>News</li>
                <li>Social Media</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer