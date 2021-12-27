import React from 'react';
import "../App.css";
import { Button } from './Button.js';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1></h1>
            <p></p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline" 
                    buttonSize="btn--large"
                >
                Comienza ahora
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary" 
                    buttonSize="btn--large"   
                    onClick={console.log('hey')}
                >
                En espera <i className="far fa-play-circle" />
                </Button>            
            </div>
        </div>
    )
}

export default HeroSection
