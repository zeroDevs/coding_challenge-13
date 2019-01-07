import React from 'react';
import './Newsletter.css';
import curve from '../../images/svg-bgs/bg-whitewave-desktop.svg'

const Newsletter = () => {
    return (
        <section id="newsletter">
            <img src={curve} alt="" style={{ width: "100%" }} />
            <div className="content">
                <div className="ml-form-embed"
                    data-account="1252504:i9w0t9r0s7"
                    data-form="1154434:v3f5g7">
                </div>
            </div>
            <img className="svg-flip" src={curve} alt="" style={{ width: "100%" }} />
        </section>
    )
}

export default Newsletter;
