import React, { useState, useEffect, createContext } from 'react';

import Car from './Car';
import Forms from './Forms';
import Garage from './Garage';
import Greeting from './Greeting';
import List from './List';


const UserContext = createContext();

function App(){

    const [count, setCount] = useState(0);
    const [multiple, setMultiple] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setMultiple(() => count * 2)
        }, 1000);
    }, [count]);

    const Tag = () => {
        return <> <p>I've rendered {count} times!</p>
            <button onClick={() => setCount((c) => c + 1)}>Times 2</button>
            <p>{multiple}</p>
        </>;
    };

    return(
        <UserContext.Provider value={count}>
            <Car />
            <Tag />
            <Forms />
            <Garage />
            <Greeting />
            <List />
        </UserContext.Provider>
    )
}

export default App;