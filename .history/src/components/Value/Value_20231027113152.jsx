import React from 'react'
import './Value.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings flexCenter innerWidth v-container">
        {/* left side  */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* right side  */}
        <div className="flexColStart v-right">
          <span>Our Value</span>
          <span>Value We Give to You</span>
          <span>
            We always ready to help by providing the best services for you
          </span>
        </div>
      </div>
    </section>
  )
}

export default Value
