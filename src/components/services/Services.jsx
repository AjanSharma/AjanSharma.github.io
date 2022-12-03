import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
import Citi from '../../assests/Citi4.png'
import MS from '../../assests/MorganStanley.jpg'
import TM from '../../assests/techMahindra.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Work Experience</h2>

      <div className="container services__container">

        <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='okay'
        >
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Citi, Canada</h3>
            </div>

            <img src={Citi} className='img_logo'/>


            {/* <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul> */}
          </SwiperSlide>
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Citi, Canada</h3>
            </div>


            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Developing and deploying automated solutions for business.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Build Python scripts for automation of tools and reports.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Providing technical (Unix, MSSQL, DB2) assistance to development teams.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Working as change coordinator for deployment of fixes and new advancements in application.  </p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Analyze, debug and advancing existing automated python scripts.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Involved in implementation and advancement of Autosys jobs </p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Implementing dashboards and analyzing the data through Microsoft PowerBi.</p>
              </li>
            </ul>
          </SwiperSlide>
        </Swiper>
        


      
        {/* <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>


          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}

        <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='okay'
        >
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Morgan Stanley, Canada</h3>
            </div>

            <img src={MS} className='img_logo'/>


            {/* <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul> */}
          </SwiperSlide>
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Morgan Stanley, Canada</h3>
            </div>


            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Automation of toils, as well as development of quick CLI tools for efficient daily support.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Writing the underlying scripts for Autosys jobs in Bash, and Python.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Technical (Unix and Sybase) support/monitoring on the central database repository that stores fixed income commodities trades and positions data.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Working on SQL queries/extracts, upon data requests from users including the Trading desk.  </p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Provide support on mission-critical Trading and Risk Application</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Implementation and maintenance of ‘Ready for Business’ checks. </p>
              </li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Morgan Stanley, Canada</h3>
            </div>


            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Gathering Intraday risk run requirement from commodities traders, for the management/ optimization of profit and loss runs via Autosys tooling.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Creation of new Risk run definitions for trading desks.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Incident/Problem management, assisting with outage resolution followed by RCA.</p>
              </li>
            </ul>
          </SwiperSlide>
        </Swiper>

        {/* <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}

        <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='okay'
        >
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Tech Mahindra, India</h3>
            </div>

            <img src={TM} className='img_logo'/>


            {/* <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul> */}
          </SwiperSlide>
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Tech Mahindra, India</h3>
            </div>


            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Automated virtual network functions in openstack – an emerging open-source cloud platform.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Improved automation with the usage of JUJU VNF Manager to reduce operation overhead.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Tested against 4 distinct use cases such as terminating, scaling up and down instances.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Debugged the implemented python and yaml script and corrected the bugs.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Designed high level diagram for the ongoing project in the organization.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Accomplished the project objective of automation within 3 months of internship.</p>
              </li>
            </ul>
          </SwiperSlide>
        </Swiper>

        {/* <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services