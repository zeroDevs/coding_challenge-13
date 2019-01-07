import React from 'react';
import './Footer.css';
import wave from '../images/svg-bgs/bg-wave-desktop.svg';
import logo from '../images/logo1alt.png';

const Footer = () => (
  <footer>
    <img src={wave} alt="" style={{ width: '100%' }} />
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-xs-12">
            <a className="navbar-brand pb-3" href="/#">
              <img src={logo} alt="logo" height="50" />
            </a>
            <p className="text-muted text-justify">
              Dedicated to monitoring the top 5 job demands in the 5 categories: Web, Mobile,
              Programming Languages, Backend
            </p>
            <div className="socials text-white pt-2">
              <i className="fab fa-medium" />
              <i className="fab fa-twitter-square" />
              <i className="fab fa-github-square" />
            </div>
          </div>

          <div className="credits col-md-7 col-xs-6">
            <h5 className="pt-2">Brought to you by</h5>
            <ul>
              <a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/">
                <li>Zero To Mastery</li>
              </a>
              <a href="https://github.com/anantankur">
                <li>Ankur Anant</li>
              </a>
              <a href="https://github.com/Dhaval1403">
                <li>Dhaval Mehta</li>
              </a>
              <a href="https://github.com/MattCSmith">
                <li>Matt Smith</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright">© 2019 FullStack Trends. All Rights Reserved</div>

        </footer>
);

export default Footer;
