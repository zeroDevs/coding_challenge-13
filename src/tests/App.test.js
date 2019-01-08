import React from "react";
import App from '../App';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
    it("App renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("App has a valid snapshot", () => {
      const component = renderer.create(<App />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

test('should render AddExpensePage correctly', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

