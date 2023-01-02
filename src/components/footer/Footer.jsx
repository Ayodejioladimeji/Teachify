import { ChevronRight } from '@material-ui/icons';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 footer-contact'>
              <h3>
                Teachify<span>.</span>
              </h3>
              <p>
                Teachify is a LMS platform that connect Teachers with Students
                globally. Teachers crate high quality course and present them in
                super easy way.
                <br />
                <strong>Phone:</strong> +2348053838074
                <br />
                <strong>Email:</strong> teachify@gmail.com
                <br />
              </p>
            </div>

            <div className='col-lg-2 col-md-6 footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to='/'>
                    <ChevronRight className='bx-chevron-right' />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/contact_us'>
                    <ChevronRight className='bx-chevron-right' />
                    Contact Page
                  </Link>
                </li>
                {/* <li>
                  <Link to='/'>
                    <ChevronRight className='bx-chevron-right' />
                    Services
                  </Link>
                </li> */}
                <li>
                  <Link to='/'>
                    <ChevronRight className='bx-chevron-right' />
                    Terms and Condition
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <ChevronRight className='bx-chevron-right' />
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to='/courses'>
                    <ChevronRight className='bx-chevron-right' />
                    Frontend Development
                  </Link>
                </li>
                <li>
                  <Link to='/courses'>
                    <ChevronRight className='bx-chevron-right' />
                    Backend Development
                  </Link>
                </li>
                <li>
                  <Link to='/courses'>
                    <ChevronRight className='bx-chevron-right' />
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link to='/courses'>
                    <ChevronRight className='bx-chevron-right' />
                    UI/UX Designs
                  </Link>
                </li>
                <li>
                  <Link to='/courses'>
                    <ChevronRight className='bx-chevron-right' />
                    Machine Learning
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-4 col-md-6 footer-newsletter'>
              <h4>Join Our Newsletter</h4>
              <p>
                An online Learning Platform for students and Developers, Learn
                at your own pace..
              </p>
              <form>
                <input type='email' name='email' />
                <input type='submit' value='Subscribe' />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='container py-4 footer-bot'>
        <div className='mr-md-auto text-center'>
          <div className='copyright'>
            Copyright &copy; 2021 -{' '}
            <strong>
              <span>Teachify</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
