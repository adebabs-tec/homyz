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
import data from '../../utils/accordion'

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
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.{' '}
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionItem">
                  <AccordionItemHeading>
                    <div className="flexCenter icon">{item.icon}</div>
                  </AccordionItemHeading>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value
