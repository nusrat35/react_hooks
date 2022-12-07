import { useEffect, useState } from "react";
import './style.css';

export const CountApp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count > 0 ? `Count${count}` : 'count';
    }, [count])

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count === 0) return;
        setCount(count - 1);
    }

    return (
        <div className="cart">
            <button id="dec" onClick={decrement}>-</button>
            <p>{count}</p>
            <button id="inc" onClick={increment}>+</button>
        </div>
    )
}