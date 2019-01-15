import React from 'react';
import { shallow, mount } from 'enzyme';
import Chart from '../components/Chart/Chart';



describe('Chart', () => {
  let props;
  let mountedChart;

  const chart = () => {
    if (!mountedChart) {
      mountedChart = mount(<Chart {...props} />);
    }

    return mountedChart;
  };

  beforeEach(() => {
    props = {
      data: undefined,
      legend: undefined,
    };
    mountedChart = undefined;
  });

  it('always render div', () => {
    const divs = chart().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  describe('render the Chart div', () => {
    it('should have a data prop with undefined value', () => {
      const dataNull = undefined;

      expect(dataNull).toEqual(chart().props().data);
    });

    it('should render an h2 tag', () => {
      expect(shallow(<Chart {...props} />).contains(<h2>Loading...</h2>)).toBe(true);
    });

    it('should not render a h2 tag', () => {
      const props = {
        data: {},
        legend: undefined,
      };
      expect(shallow(<Chart {...props} />).contains(<h2>Loading...</h2>)).toBe(false);
    });
  });
});


