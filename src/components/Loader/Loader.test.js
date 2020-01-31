import React from "react"
import { configure, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Loader from "./index";

configure({ adapter: new Adapter() });

describe("Loader Render", () => {
    it("Render the component", () => {
        const component = mount(<Loader />);
        expect(component.debug()).toMatchSnapshot();
    });
});
