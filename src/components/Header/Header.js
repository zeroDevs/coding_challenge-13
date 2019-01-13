import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from '../../images/logo1.png';

const Header = () => (
  <section>
    <nav id="header" className="navbar navbar-expand-md navbar-light fixed-top">
      <Link to="top" smooth duration={800} offset={-131}>
        <img src={logo} alt="logo" height="50" className="logo-active" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav nav-buttons">
          <Link
            to="newsletter"
            className="button-primary"
            spy
            activeClass="active"
            smooth
            duration={800}
            offset={0}
          >
            Newsletter
          </Link>
          <Link
            to="data"
            className="button-primary"
            spy
            activeClass="active"
            smooth
            duration={800}
            offset={0}
          >
            Data
          </Link>
        </div>
      </div>
    </nav>
  </section>
);

export default Header;
