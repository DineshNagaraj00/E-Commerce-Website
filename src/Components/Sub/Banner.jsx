import React from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Banner() {
  return (
    <div className='banner'>
       <img src="https://p4.wallpaperbetter.com/wallpaper/1012/516/895/women-model-monochrome-arms-up-tattoo-hd-wallpaper-preview.jpg" alt="" />
            <div className="text">
            <h2>Flat 50% off on</h2>
            <h1>Customization</h1>
            <p>closes soon</p>
            <Button>Customize
                <ArrowRightAltIcon className='arrow'/>

            </Button>
            </div>
    </div>
  )
}

export default Banner