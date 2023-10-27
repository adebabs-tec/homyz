import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons></SliderButtons>
          {data.map((card, i) => {
            const { name, price, detail, image } = card
            return (
              <SwiperSlide key={i}>
                <div className="flexColStart  r-card">
                  <img src={image} alt="home" />

                  <span className="secondaryText r-price">
                    <span style={{ color: 'orange' }}>$</span>
                    <span>{price}</span>
                  </span>

                  <span className="primaryText">{name}</span>
                  <span className="secondaryText">{detail}</span>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper()
  return (
    <div className="r-button">
      <button onClick={() => swiper.slidePrev}>&lt;</button>
      <button onClick={() => swiper.slideNext}>&gt;</button>
    </div>
  )
}
