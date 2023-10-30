import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <Selection className="c-wrapper">
      <div className="flexCenter innerWidth paddings c-container">
        {/* left side  */}
        <div className="c-left">
          <span>Our Contacts</span><span>Easy to Contact us</span><span>We always ready to help by providing the best se</span>
        </div>
        {/* right side  */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </Selection>
  )
}

export default Contact
