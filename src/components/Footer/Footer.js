import React from 'react';
import './Footer.css';
import wave from '../../images/svg-bgs/bg-wave-desktop.svg';
import logo from '../../images/logo1alt.png';
import Contrib from './contributors';

const Footer = ({ contrib }) => (
  <footer>
    <img src={wave} alt="" style={{ width: '100%' }} className="footer-wave" />
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-xs-12">
            <a className="navbar-brand pb-3" href="/#">
              <img src={logo} alt="logo" height="50" />
            </a>
            <p className="text-muted text-left">
              Dedicated to monitoring the top 5 job demands in the 4 categories: Web, Mobile,
              Programming Languages, Backend
            </p>
            <div className="socials text-white pt-2">
              <a href="https://medium.com/zerotomastery" target="_blank" rel="noopener noreferrer">
                <i className="grow fab fa-medium" />
              </a>
              <a href="https://twitter.com/AndreiNeagoie" target="_blank" rel="noopener noreferrer">
                <i className="grow fab fa-twitter-square" />
              </a>
              <a
                href="https://github.com/zero-to-mastery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="grow fab fa-github-square" />
              </a>
            </div>
          </div>

          <div className="credits col-md-7 col-xs-6">
            <h5 className="pt-2">Brought to you by</h5>
            <ul>
              <a
                href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="grow">Zero To Mastery</li>
              </a>
              <a href="https://github.com/anantankur" target="_blank" rel="noopener noreferrer">
                <li className="grow">Ankur Anant</li>
              </a>
              <a href="https://github.com/Dhaval1403" target="_blank" rel="noopener noreferrer">
                <li className="grow">Dhaval Mehta</li>
              </a>
              <a href="https://github.com/MattCSmith" target="_blank" rel="noopener noreferrer">
                <li className="grow">Matt Smith</li>
              </a>
              <Contrib contributors={contrib} />
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright">
      © {new Date().getFullYear()} FullStack Trends. All Rights Reserved
    </div>
  </footer>
);

export default Footer;
