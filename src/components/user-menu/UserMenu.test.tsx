import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import "../../translations/translations";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import UserMenu from "./UserMenu";
import { Button, MenuItem, ListItemText } from "@material-ui/core";
import StyledMenu from "./StyledMenu";

Enzyme.configure({ adapter: new Adapter() });

describe("Test login form component", () => {
    const component: any = shallow(<UserMenu />);

    it("contain form elements", () => {
        expect(component.containsMatchingElement(<MenuItem />)).toBeTruthy;
        expect(component.containsMatchingElement(<ListItemText />)).toBeTruthy;
        expect(component.containsMatchingElement(<Button />)).toBeTruthy;
        expect(component.containsMatchingElement(<StyledMenu open={true} />)).toBeTruthy;
    });

});
