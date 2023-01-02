import React from 'react';

// PACKAGES
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import Typewriter from 'typewriter-effect';

// COMPONENTS
import content from '../../constants/Hero1';
import './Hero.css';

const Hero1 = () => (
  <div>
    <Slider className='slider-wrapper' autoplay={7000} touchDisabled={true}>
      {content.map((item, index) => (
        <div
          key={index}
          className='slider-content'
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className='inner'>
            <h4>
              <Typewriter
                options={{
                  strings: [`Your #1 Learning Management Platform`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <h1>
              <span>{item.start}</span>
              {item.title}
            </h1>
            <p>{item.description}</p>
            <Link to={item.link}>
              <button>{item.button}</button>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Hero1;
