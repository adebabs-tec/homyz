import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
// import {Hi}

const Contact = () => {
  return (
    <Selection className="c-wrapper">
      <div className="flexCenter innerWidth paddings c-container">
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            believe a good place to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                </div>
              </div>
            </div>
            {/* second row */}
          </div>
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
