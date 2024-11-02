import React, { useContext, createContext } from 'react';

// ========= Function Component

const UserContext = createContext();
function Garage(props){
    const car = useContext(UserContext);
    // if (props.name){
    //     return <h1>The name of my car is {props.name}</h1>
    // } 
    // else {
    //     return <h1>No Car name</h1>
    // }

    return <>
                <h1>You have {car} cars </h1>
            </>

}

function Car(props){
    // const Car

    const showCar = (car, e) => {
        alert(car);
        console.log(e);
    }
    
    const list = ['Toyota', 'Benz'];
    // var list;
    return (<>
        { list ? <Garage name={list} /> : <h2>null</h2>}
        <h4>It is in the Garage {props.item}</h4>
        <button onClick={(event) => showCar('Benz', event)}>Alert me</button>
        </>);
}

export default Car;