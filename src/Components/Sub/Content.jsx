import React from 'react'
import './Content.css'
import { Button } from '@mui/material'
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';




function Content() {
  const history=useNavigate();


    function handleCheck() {
        history('/Search')
      }

      function handleCheck__two(){
        history('/Trending')

      }
      function handleCheck__three(){
        history('/BestSeller')

      }
        

  return (
    <div className='content'>
        <div className="width">
            <img src="https://st.depositphotos.com/1550494/2604/i/450/depositphotos_26043279-stock-photo-retro-fifties-summer-fashion-man.jpg" alt="" />   
            <h1>For Men</h1> 
           <Button>Shop Now
            </Button>          
        </div>
        <div className="width">
            <img src="https://cdn.shopify.com/s/files/1/0163/6622/files/Hands_in_pockets_web_1.jpg?v=1669923238" alt="" />   
            <h1>For Women</h1> 
           <Button>Shop Now
            </Button>          
        </div>
        


        <div className="trending">
            <img src="https://www.a-rrajani.com/wp-content/uploads/2023/05/12.jpg" alt="" />
            <h1>New Arrival</h1>
            <Button  onClick={handleCheck}>Shop Now
            </Button> 
        </div>
        <div className="trending">
            <img src="https://www.a-rrajani.com/wp-content/uploads/2021/10/7-copy.jpg" alt="" />
            <h1>TRENDING</h1>
            <Button onClick={handleCheck__two}>Shop Now
            </Button> 
        </div>


        <div className="trending">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/6/317266686/UK/WS/EJ/189416308/modeling-photo-shoot-500x500.jpg" alt="" />
            <h1>BEST-SELLER</h1>
            <Button onClick={handleCheck__three} >Shop Now
            </Button> 
        </div >


        <div className="line">
            <h1>Popular on Modify</h1>
            <Button>View More
                <ArrowRightAlt/>
            </Button>
            <hr className='lines' />
        </div>


        <div className="collections">
            <div className="images">
                <img src="https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?cs=srgb&dl=pexels-yuri-manei-2235071.jpg&fm=jpg" alt="" />
            </div>
            <h3>Luxury Dress</h3>
                <div className="stars">
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                </div>
                <p>Luxury party wear which is more <br /> comfortable to wear</p>

                    <div className="price">
                        <h4>RS 1500</h4>
                        <h5>RS 3599</h5>
                    </div>
                    <div className="btn">
                    <Button>ADD TO CART
                            <ArrowRightAlt/>
                        </Button>
                    </div>
        </div>

        <div className="collections">
            <div className="images">
                <img src="https://www.nextdirect.com/nxtcms/resource/blob/5821518/d114a8023263017f86b11c206949508e/shackets-data.jpg" alt="" />
            </div>
            <h3>Men's Collection's</h3>
                <div className="stars">
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                </div>
                <p>Men's party wear which is more <br /> comfortable to wear</p>

                    <div className="price">
                        <h4>RS 800</h4>
                        <h5>RS 1599</h5>
                    </div>
                    <div className="btn">
                    <Button>ADD TO CART
                            <ArrowRightAlt/>
                        </Button>
                    </div>
        </div>
        <div className="collections">
            <div className="images">
                <img src="https://www.printique.com/wp-content/uploads/2014/09/shutterstock_46691539.jpg" alt="" />
            </div>
            <h3>Costume's</h3>
                <div className="stars">
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                </div>
                <p>Costume for party wear which is more <br /> comfortable to wear</p>

                    <div className="price">
                        <h4>RS 2500</h4>
                        <h5>RS 6599</h5>
                    </div>
                   <div className="btn">
                    <Button>ADD TO CART
                            <ArrowRightAlt/>
                        </Button>
                    </div>
        </div>

        <div className="discriptions">
            <img src="https://i.pinimg.com/originals/08/84/f9/0884f9040c7cbe92b31693f18ee97007.jpg" alt="" />
            <h2>Express, Evolve, Modify <br /> Where Style Meets Personality.</h2>
            <hr  />
            <p className='one'>At Modify, we are more than a fashion destination; we are a canvas <br />
                for self-expresion. Born out of a passion for individuality, Modify is <br />
                your go-to platform for curated style and personalized fashion 
            </p>
            <h1 className='head__one'>
                Premium Quality
            </h1>
            <p className='two'>
                Discover a diverse range of premimum outfits crafted from high- <br />
                quality materials, for every occasion.
            </p>
            <h1 className='head__two'>
                Customization Hub
            </h1>
            <p className='three'>
                Choose from wide array of design options, colors and size to <br />
                create a personalized fashion statement.
            </p>
            <div className="btn">
            <Button className='btn_one'>SHOP NOW
                <ArrowRightAlt/>
            </Button>
            <Button className='btn_1'>KNOW MORE
                <ArrowRightAlt/>
            </Button>
            </div>
        </div>
        
        
    </div>
    
  )
}

export default Content