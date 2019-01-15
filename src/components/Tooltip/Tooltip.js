import React from 'react';
import './Tooltip.css';

const Tooltip = ({ children, tooltipText, position }) => {
    //Allowed positions are bottom, top, right, left. Default is bottom.
    const allowedPositions = ['bottom', 'top', 'right', 'left'];
    position = allowedPositions.indexOf(position) > -1 ? position : 'bottom';

    return (
        <div className='pt-3 pb-3 tooltipContainer'>
            <div className={`tooltipTrigger ${position}`}>
                {children}
                <div className="tooltipTextContainer d-none">
                    <div className={`arrow-${position}`}></div>
                    <p className='tooltipText'>{tooltipText}</p>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;