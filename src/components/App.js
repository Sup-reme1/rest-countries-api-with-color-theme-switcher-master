import Header from './Header';
import Navigation from './Navigation';
import CountryContainer from './CountryContainer'; 
import { useState } from 'react';

export default function App(){
    const [region, setRegion] = useState('');

    const handleRegion= (e)=>{
        setRegion(()=>{
            return e;
        });
    }

    return (
        <>
            <Header />
            <Navigation region={handleRegion} />
            <CountryContainer region={region} />
        </>
    )
};