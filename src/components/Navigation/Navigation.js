import React from 'react';
import './Navigation.css';

const Navigation = ({ onNavClick, currentCategoryIndex }) => {
  const isActive = (categoryIndex) => {
        return `button-primary${categoryIndex===currentCategoryIndex?' active':''}`;
    }
  return(
  <div className="container">
    <div className="row center text-center">
      <div className="d-inline-block">
        <button className={isActive(0)} onClick={() => onNavClick(0)}>
          <i className="fas fa-globe" />
          <span className="d-none d-sm-block">Web</span>
        </button>
      </div>

      <div className="d-inline-block">
        <button className={isActive(1)} onClick={() => onNavClick(1)}>
          <i className="fas fa-mobile-alt" />
          <span className="d-none d-sm-block">Mobile</span>
        </button>
      </div>

      <div className="d-inline-block">
        <button className={isActive(2)} onClick={() => onNavClick(2)}>
          <i className="fas fa-code" />
          <span className="d-none d-sm-block">Languages</span>
        </button>
      </div>

      <div className="d-inline-block">
        <button className={isActive(3)} onClick={() => onNavClick(3)}>
          <i className="fas fa-server" />
          <span className="d-none d-sm-block">Backend</span>
        </button>
      </div>
    </div>
  </div>
);
}
export default Navigation;
