import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Sliders from '../components/Sliders'

const Home = () => {
  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Sliders/>
    <Categories/>
    <Products/>
    </div>
  )
}

export default Home