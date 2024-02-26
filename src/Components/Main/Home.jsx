import React from 'react'
import Banner from '../Sub/Banner'
import Content from '../Sub/Content'
import Footer from '../Sub/Footer'
import  './Home.css'
import Nav from '../Sub/Nav'
import Trending from './Trending'




function Home() {
  return (
    <div className='home'>
      <Nav/>

        <div className="home__section">
            <Banner/>
        </div>
        
        <div className="content__section">
        <Content/>
        </div>
    </div>
  )
}

export default Home