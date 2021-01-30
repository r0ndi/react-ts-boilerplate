import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import Typography from '@material-ui/core/Typography';
import "../../translations/translations";
import Enzyme, { shallow } from "enzyme";
import Header from "./Header";
import React from "react";
import UserMenu from "../user-menu/UserMenu";

Enzyme.configure({ adapter: new Adapter() });

describe("Test header component", () => {
    const component: any = shallow(<Header />);

    it("contain child components", () => {
        expect(component.containsMatchingElement(<Typography />)).toBeTruthy;
        expect(component.containsMatchingElement(<UserMenu />)).toBeTruthy;
    });

});
