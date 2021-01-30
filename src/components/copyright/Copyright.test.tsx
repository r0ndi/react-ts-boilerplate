import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import Typography from '@material-ui/core/Typography';
import "./../../translations/translations";
import Enzyme, { shallow } from "enzyme";
import Copyright from "./Copyright";

Enzyme.configure({ adapter: new Adapter() });

describe("Test copyright component", () => {
    const component: any = shallow(<Copyright />);

    it("contain typography", () => {
        expect(component.containsMatchingElement(<Typography />)).toBeTruthy;
    });

});
