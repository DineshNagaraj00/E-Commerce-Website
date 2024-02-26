import React from 'react'
import './Shop.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

function Shop() {
  return (
    <div className='products'>
        <h1>Shopping</h1>
        <div className="items">
            
            <div className="images">
            <img src="https://sslimages.shoppersstop.com/sys-master/images/hce/hd7/31731963985950/MAXI28_MULTI.jpg_2000Wx3000H" alt="" />

            <div className="heartin">
              <FavoriteBorder/>
            </div>

            </div>
            <h6>Printed Georgette Round <br /> Neck Women's Midi Dress</h6>
            <div className="stars">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <p>4.8</p>
            </div>
            <div className="price">
              <h4>RS 1399</h4>
            </div>
            <div className="hidden">
              <Button>Order Now</Button>
            </div>
    </div>


    <div className="items">
            
            <div className="images">
            <img src="https://sslimages.shoppersstop.com/sys-master/images/h91/h12/31666803736606/MCORD1476_WINE.jpg_2000Wx3000H" alt="" />

            <div className="heartin">
              <FavoriteBorder/>
            </div>

            </div>
            <h6>Solid Above Knee Lycra <br /> Knitted Women's Co-Ord Set</h6>
            <div className="stars">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <p>4.8</p>
            </div>
            <div className="price">
              <h4>RS 899</h4>
            </div>
            <div className="hidden">
              <Button>Order Now</Button>
            </div>
    </div>

    <div className="items">
            
            <div className="images">
            <img src="https://sslimages.shoppersstop.com/sys-master/images/h72/h13/31556486594590/AW23MADM3W13007_PURPLE.jpg_2000Wx3000H" alt="" />

            <div className="heartin">
              <FavoriteBorder/>
            </div>

            </div>
            <h6>Solid Polyester Slim <br /> Fit Women's Mini Dress</h6>
            <div className="stars">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <p>4.8</p>
            </div>
            <div className="price">
              <h4>RS 999</h4>
            </div>
            <div className="hidden">
              <Button>Order Now</Button>
            </div>
    </div>

    <div className="items">
            
            <div className="images">
            <img src="https://sslimages.shoppersstop.com/sys-master/images/h8e/h0b/31265777319966/A23MCORD1304_MULTI.jpg_2000Wx3000H" alt="" />

            <div className="heartin">
              <FavoriteBorder/>
            </div>

            </div>
            <h6>Printed Polyester Relaxed <br /> Fit Women's Co-Ord Set</h6>
            <div className="stars">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <p>4.8</p>
            </div>
            <div className="price">
              <h4>RS 1199</h4>
            </div>
            <div className="hidden">
              <Button>Order Now</Button>
            </div>
    </div>


    <div className="items">
            
            <div className="images">
            <img src="https://sslimages.shoppersstop.com/sys-master/images/hf6/h81/31729133453342/MAXI35_BLUE.jpg_2000Wx3000H" alt="" />

            <div className="heartin">
              <FavoriteBorder/>
            </div>

            </div>
            <h6>Printed Georgette Round <br />
             Neck Women's Midi Dress</h6>
            <div className="stars">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <p>4.7</p>
            </div>
            <div className="price">
              <h4>RS 1099</h4>
            </div>
            <div className="hidden">
              <Button>Order Now</Button>
            </div>
    </div>

    <div className="items">
            
            <div className="images">
            <img src="https://sslimages.shoppersstop.com/sys-master/images/h0f/hb7/30529173159966/EP7546_BLACK.jpg_2000Wx3000H" alt="" />

            <div className="heartin">
              <FavoriteBorder/>
            </div>

            </div>
            <h6>Floral Off Shoulder Georgette <br /> Women's Maxi Dress</h6>
            <div className="stars">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <p>4.8</p>
            </div>
            <div className="price">
              <h4>RS 1299</h4>
            </div>
            <div className="hidden">
              <Button>Order Now</Button>
            </div>
    </div>

    </div>
  
)
}


export default Shop