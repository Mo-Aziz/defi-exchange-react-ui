import React from 'react'
import './HeroStyles.css'
import Laptop from '../../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        {/* left side */}
        <div className="left">
          <p> Buy & Sell Crypto 24/7 using your retirment account</p>
          <h1>Invest in cryptocurrency with your IRA</h1>
          <p>Buy, sell, and store hundreds of cryptocurrencies</p>
          <div className="input-container">
            <input type="email"  placeholder='Enter your email'/>
            <button className="btn">Learn More</button>
          </div>
        </div>

        {/* right section */}
        <div className="right">
          <div className="im-container">
            <img src={Laptop} alt="laptop"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero