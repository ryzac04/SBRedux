
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./actions";

const Counter = () => {
    const dispatch = useDispatch(); 
    const count = useSelector(store => store.count); 
    const up = () => dispatch(increment()); 
    const down = () => dispatch(decrement()); 
    const toZero = () => dispatch(reset()); 
    return (
        <div>
            <h3>Count is: {count}</h3>
            <button onClick={up}>+</button>
            <button onClick={down}>-</button>
            <button onClick={toZero}>Reset</button>
        </div>
    )
};

export default Counter; 