import { configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";

require('web-streams-polyfill/ponyfill');
configure({ adapter: new Adapter() });
