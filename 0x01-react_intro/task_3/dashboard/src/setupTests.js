import { TextEncoder, TextDecoder } from 'util';
import { configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

configure({ adapter: new Adapter() });
