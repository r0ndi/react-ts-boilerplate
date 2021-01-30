import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import "../../translations/translations";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import UserDetailsEdit from "./UserDetailsEdit";
import { TextField, Button } from "@material-ui/core";

Enzyme.configure({ adapter: new Adapter() });

describe("Test user details edit component", () => {
    const component: any = shallow(<UserDetailsEdit />);

    it("contain form elements", () => {
        expect(component.containsMatchingElement(<TextField />)).toBeTruthy;
        expect(component.containsMatchingElement(<Button />)).toBeTruthy;
    });

    it("contian required fields", () => {
        expect(component.containsMatchingElement(<TextField name="firstname" />)).toBeTruthy;
        expect(component.containsMatchingElement(<TextField name="lastname" />)).toBeTruthy;
    });

});
