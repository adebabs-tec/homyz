import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side  */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="search-bar"></div>
        </div>
        {/* right side  */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
