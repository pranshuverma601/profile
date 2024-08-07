import React from 'react';
import './Services.css';
import themePattern from '../../assets/theme_pattern.svg';
import Services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className="services">
        <div className="services-title">
            <h1>My Services</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="servieces-container">
            {Services_data.map((services, index) => {
                return <div key={index} className="services-format">
                  <h3>{services.s_no}</h3>
                  <h2>{services.s_name}</h2>
                  <p>{services.s_desc}</p>
                  <div className="sevices-readmore">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                  </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services;