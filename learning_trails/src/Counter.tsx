import { useState } from 'react';

export default function Counter() {
    const [counter, setCount] = useState<number>(15);
    const addValue = () =>  {
        //setCount(counter + 1);
        setCount((prev:number):number => prev+1);
        setCount((prev:number):number => prev+1);
        setCount((prev:number):number => prev+1);
    }
    const remValue = () => {
        setCount(counter-1);
    }
    return(
        <div>
            <h1>Counter Value : {counter} </h1>
            <button onClick={addValue}>Add value </button>{" "}
            <button onClick={remValue}>Remove value </button>
            <p>footer :  {counter}</p>
        </div>
    );
}