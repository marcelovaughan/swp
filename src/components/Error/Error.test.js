import React from "react"
import { configure, mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Error from "./index";

configure({ adapter: new Adapter() });

describe("Error Render", () => {
    it("Render the component", () => {
        const component = mount(<Error />);
        expect(component.debug()).toMatchSnapshot();
    });
});
