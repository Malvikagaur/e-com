import React,{useState} from "react";
import './App.css';


function Counter () {
    const[num, setNum] = useState(0);
    const incNum = () => {
        setNum(num + 1);
    }
    const decNum = () => {
        setNum(num - 1);
    }
    
    return (
        <div className="main_div text-center">
            <div className="center_div">
                <h1>{num}</h1>
                <div className="bttn">
                    <button onClick={incNum}>Increment</button>
                    <button onClick={decNum}>Decrement</button>
                </div>
            </div>

        </div>
    )

}
export default Counter;