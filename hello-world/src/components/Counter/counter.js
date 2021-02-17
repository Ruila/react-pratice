import React, { useState } from 'react';
import '../../css/counter.css';
export default function Counter(props) {
    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    }
    function minus() {
        setCount(count - 1)
    }
    return(
        <div id="counter">
            <div className="caculate">
                <div onClick={add}>+</div>
                <div onClick={minus}>-</div>
            </div>
            <h5>運算後的值：{count}</h5>
        </div>
    )
}