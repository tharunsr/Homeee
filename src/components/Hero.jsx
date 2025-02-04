import React from 'react';
import './Hero.css';
import LadyImage from '../assets/Skincare-bro.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h3>Welcome to BeautyBasket</h3>
                <p>Discover amazing products and join our community. Explore, buy, and shop with us!</p>
                <button>Get Started</button>
            </div>
            <div className="hero-illustration">
                <img src={LadyImage} alt="Illustration" />
            </div>
        </div>
    );
};

export default Hero;
