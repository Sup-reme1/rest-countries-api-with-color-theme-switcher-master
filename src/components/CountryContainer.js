import { useState } from "react";
import CountryCard from "./CountryCard";
import {v4 as uuidv4} from 'uuid';

export default function CountryContainer(props){
    const [data, setData] = useState([]);
    
    // async function api() {
    //     try{
    //         const response = await fetch('https://restcountries.com/v3.1/all');
    //         const result = await response.json();
    //     }catch(error){
    //         console.error('error fetching Api');
    //     }
    // }
    // api();

    // useEffect(()=>{
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then((response)=> response.json())
    //         .then((jsonData)=> setData(jsonData))
    //         .catch((error)=> console.log('error fetching data', error))
    // }, []);

    fetch('https://restcountries.com/v3.1/all')
        .then((response)=> response.json())
        .then((jsonData)=> setData(jsonData))
        .catch((error)=> console.log('error fetching data', error));
    
    return(
        <div className="countries-container">
            {data.map((country)=>{
                return(
                <CountryCard key={uuidv4()} place={country} />
                )
            })};     
        </div>
    )
}