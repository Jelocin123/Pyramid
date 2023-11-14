"use client"
import React, { useEffect } from 'react';

import 'bootstrap-icons/font/bootstrap-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles/page.module.scss';

import "bootstrap/dist/css/bootstrap.css";


import Navbar from './components/navbar/navbar';
import Slider from './components/slider/slider';
import AboutUs from './components/about/aboutUs';
import Goals from './components/goals/goals';

const Home = () => {

  useEffect(() => {
    AOS.init();
}, []);

  return (

 <main id={styles.main}>
  <Navbar/>
  <AboutUs/>
  <Slider/>
  <Goals/>
 </main>

  )
}

export default Home; 
