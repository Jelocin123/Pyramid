import React from 'react'
import styles from '../../styles/navbar.module.scss'
import Link from 'next/link';
import Profile from '../../../../public/assets/logo-black.png';
import Image from 'next/image';



const navbar = () => {
  return (
    <header id={styles.header} data-aos="fade-right">
      <div className='d-flex flex-column'>
        <div className={styles.profile}>
          <Image className='img-fluid rounded-circle mx-auto' src={Profile} alt="Dog" />
          <h1 className='text-light'>
            <Link href="#">Klima Pyramiden</Link>
          </h1>
          
        </div>
        <nav id="navbar" className={`${styles.nav_menu} navbar`}>
          <ul>
            <li>
              <a className='nav-link scrollto active' href="#" >
              <i className="bi bi-info-square"></i>
                <span>About us</span>
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href="#slider" >
              <i className="bi bi-camera"></i>
                <span>Slider</span>
              </a>
            </li>
            
            
           
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default navbar