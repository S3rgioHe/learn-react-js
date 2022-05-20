import { useState } from "react";

export function Counter() {

    const [counter, setCounter] = useState(0);

    function increment(n1) {
        setCounter(counter + n1);
    }

    return (
        <div>
            <h1>Counter</h1>

            <div style={{ display: 'flex' }}>
                <h2>{counter}</h2>
                <button type="button" onClick={() => increment(1)} style={{ padding: 10, margin: 4 }}> + </button>
                <button type="button" onClick={() => increment(-1)} style={{ padding: 10, margin: 4 }}> - </button>
            </div>
        </div>
    );
}