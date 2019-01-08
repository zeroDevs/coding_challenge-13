import React from 'react';
//import {Polar} from 'react-chartjs-2';
import {mount} from 'enzyme';

import Chart from '../components/Chart';

describe('Chart', () => {
    let props;
    let mountedChart;

    const chart = () => {
        if (!mountedChart) 
        {
            mountedChart = mount(
                <Chart {...props}/>
            );
        }

        return mountedChart;
    }

    beforeEach(() => {
        props = {
            data: undefined,
            legend: undefined
        };
        mountedChart = undefined;
    });

    it('always render div', () => {
        const divs = chart().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
})
