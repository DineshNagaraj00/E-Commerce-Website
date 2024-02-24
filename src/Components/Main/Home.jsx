import React from 'react'
import Banner from '../Sub/Banner'
import Content from '../Sub/Content'
import Footer from '../Sub/Footer'
import  './Home.css'



function Home() {
  return (
    <div className='home'>
      <Banner/>
      <Content/>
     <Footer/>
    </div>
  )
}

export default Home