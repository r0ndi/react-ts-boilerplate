import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import "../../translations/translations";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import LoginForm from "./LoginForm";
import { TextField, Button, Link } from "@material-ui/core";

Enzyme.configure({ adapter: new Adapter() });

describe("Test login form component", () => {
    const component: any = shallow(<LoginForm />);

    it("contain form elements", () => {
        expect(component.containsMatchingElement(<TextField />)).toBeTruthy;
        expect(component.containsMatchingElement(<Button />)).toBeTruthy;
        expect(component.containsMatchingElement(<Link />)).toBeTruthy;
    });

    it("contian required fields", () => {
        expect(component.containsMatchingElement(<TextField name="email" />)).toBeTruthy;
        expect(component.containsMatchingElement(<TextField name="password" />)).toBeTruthy;
    });

});
