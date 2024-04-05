import React, { useCallback, useEffect, useState } from "react";

export default function ProviderSearch() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const [a, setA] = useState(4);

    const aaa = useCallback(() => {
        return () => {
            setA(prevA => prevA + 1);
            return a;
        };
    }, [a]);

    const vvv = aaa();

    const ggg = () => {
        console.log(vvv());
    };

    useEffect(() => {
        ggg();
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
