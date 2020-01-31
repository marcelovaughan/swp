import React from "react"
import { configure, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Header from "./index";

configure({ adapter: new Adapter() });

describe("Header Render", () => {
    it("Render the component", () => {
        const component = mount(<Header />);
        expect(component.debug()).toMatchSnapshot();
    });
});
