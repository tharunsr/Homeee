import React from 'react';
import './HomePage.css';
import Hero from './Hero';
import logo from '../assets/beautybasket.png'
import Cognizant from '../assets/Cognizant-Logo.png'
import Garnier from '../assets/Garnier-logo.png'
import Loreal from '../assets/LOreal-Logo.png'
import Beardo from '../assets/Beardo.png'

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <nav className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="marquee-container">
        <div className="marquee">
          <p>Special Offer: Get 20% off on all products! Limited time only. Free Shipping on orders above Rs.2000. Happy Shopping !!!</p>
        </div>
        </div>
      </header>
      <main className="main-content">
      <Hero />
      <div className="marquee-container">
      <div className='marquee-two'>
      <img src={Cognizant} alt="Image 1" />
      <img src={Garnier} alt="Image 2" />
      <img src={Loreal}alt="Image 3" />
      <img src={Beardo} alt="Image 1" />
      </div>
      </div>
      </main>
      <div>sd</div>
      <footer className="footer">
        <p>Copyright BeautyBasket</p>
      </footer>
    </div>
  );
};

export default HomePage;
