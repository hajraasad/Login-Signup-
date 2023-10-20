import React, {useEffect, useState} from 'react';

function FunctionalLifecycle() {
    // Declare a state variable 'count' and its updater function 'setCount'
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('initialValue');

    //no dependency
    useEffect(() => {
        console.log('Component has mounted 0.');
    });
    //no dependency
    useEffect(() => {
        console.log('Component has mounted 1.');
    }, []);

    // useEffect with no dependencies, similar to componentDidMount
    useEffect(() => {
        console.log('Component has mounted 2.');
        return () => {
            console.log('Component will unmount.');
        };
    }, []);

    // useEffect with dependencies, similar to componentDidUpdate
    useEffect(() => {
        console.log('Component has mounted 3.');
        console.log('Count has changed, component did update with a dependency', count);
    }, [count]);


    // useEffect with multiple dependencies
    useEffect(() => {
        console.log('Component has mounted 4.');
        console.log('Count has changed:', count);
        console.log('Value has changed:', value);
    }, [count, value]);


    // useEffect with an empty dependency array for unmounting message
    useEffect(() => {
        console.log('Component has mounted 5.');
        return () => {
            console.log('Component is unmounting.');
        };
    }, []);

    const increment = () => {
        setCount(count + 1);
    };


    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default FunctionalLifecycle;
