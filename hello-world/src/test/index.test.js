import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// enzyme 及 render Component 的 method : shallow
import Enzyme, { shallow, mount } from 'enzyme' 
// 將對應 React 版本的解析器導入
import Adapter from 'enzyme-adapter-react-16'

// 以該解析器提供給 Enzyme 做渲染 Component 的設置
Enzyme.configure({ adapter: new Adapter() })

// import 受測 Component 也就是此測試的 SUT
import Index from "../components/videoBoard.js";
import Btn from '../components/button.js'



describe('test search', () => {
    let videoBoard = shallow(<Index />)
    let button = shallow((<Btn />));
    beforeEach(()=>{
      
    })

    test('Check initial state', () => {
      button.find('input').simulate('change', {target: {value: '宜蘭縣'}});
      expect(button.state('inputValue')).toBe("宜蘭縣")
    })

    test("search other country data", () => {
        // set value of input
        // button.find('input').simulate('change', {target: {value: '宜蘭縣'}});
        console.log('lalaala', button.state('inputValue'))
        // expect(button.state('inputValue')).toBe('宜蘭縣')
        // button.find('button').simulate('click');
       
    });
    
    
    // fireEvent.click(screen.getByTestId("btn"));
    // expect(screen.getByRole("data-block")).toBeInTheDocument()

});
