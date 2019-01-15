import React from 'react';
import SourceChart from './SourceChart';
import './DataSource.css';

const images = require.context('../../images', true);

const sources = [
  'angellist',
  'dice',
  'github',
  'hackernews',
  'hired',
  'indeed',
  'linkedin',
  'remoteco',
  'simplyhired',
  'stackoverflow',
  'stateofjs',
];

const DataSource = ({ chartData }) => (
  <div className="wrapper-data">
    <div className="container-grid">
      {sources.map((c, i) => (
        <div key={i} className="zone tooltip1 text-center">
          <div className="top">
            <h5>{ c }</h5>
            <i />
          </div>

          <img src={images(`./company/${c}.png`)} alt={`${c} logo`} />
        </div>
      )) }
      <div className="zone purple tooltip1 text-center">
        <div className="top">
          <h5>Other</h5>
          <i />
        </div>
        <div className="more">...</div>
      </div>
    </div>
    <div className="arrowAnim-right">
      <div className="arrowSlideRight">
        <div className="arrow-right"></div>
      </div>
      <div className="arrowSlideRight delay1">
        <div className="arrow-right"></div>
      </div>
      <div className="arrowSlideRight delay2">
        <div className="arrow-right"></div>
      </div>
      <div className="arrowSlideRight delay3">
        <div className="arrow-right"></div>
      </div>
    </div>
    <div className="arrowAnim-down">
      <div className="arrowSlideDown">
        <div className="arrow-down"></div>
      </div>
      <div className="arrowSlideDown delay1">
        <div className="arrow-down"></div>
      </div>
      <div className="arrowSlideDown delay2">
        <div className="arrow-down"></div>
      </div>
      <div className="arrowSlideDown delay3">
        <div className="arrow-down"></div>
      </div>
    </div>
    <div className="source-chart pulse animated infinite">
      <SourceChart data={ chartData } demo />
    </div>
  </div>
);
export default DataSource;
