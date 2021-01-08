import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// enzyme 及 render Component 的 method : shallow
import Enzyme, { shallow } from 'enzyme' 
// 將對應 React 版本的解析器導入
import Adapter from 'enzyme-adapter-react-16'

// 以該解析器提供給 Enzyme 做渲染 Component 的設置
Enzyme.configure({ adapter: new Adapter() })

// import 受測 Component 也就是此測試的 SUT
import Index from "./components/videoBoard.js";



describe('test index', () => {
    const area = "宜蘭縣";
    const load = "Done";
    const index = shallow(<Index />)

    test("should return true when score is 60", () => {
        expect(5 + 2).toBe(7)
        expect(index.state('currentArea')).toBe("臺南市")
      });
    
    
    // fireEvent.click(screen.getByTestId("btn"));
    // expect(screen.getByRole("data-block")).toBeInTheDocument()

});
