import Header from './Header';
import Navigation from './Navigation';
import CountryContainer from './CountryContainer'; 
import { useEffect, useState } from 'react';

export default function App(){
    const [search, setSearch] = useState({country: '', region: ''});
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then((response)=> response.json())
            .then((jsonData)=> {
                setData(jsonData);
                setFilteredData(jsonData);
            })
            .catch((error)=> console.log('error fetching data', error));
    },[])
    
    const handleRegion= (input)=>{
        setSearch(input);
    }

    useEffect(()=>{
        if (search.region && search.country){
            const searchCountry = search.country;
            const searchRegion = search.region;

            const filtData = data.filter((place)=> 
                place.region.toLowerCase() === searchRegion.toLowerCase() &&
                place.name.official.toLowerCase().includes(searchCountry.toLowerCase())
            )
            .sort((a, b) => a.name.common.localeCompare(b.name.common));

            setFilteredData(filtData);
        } else if (search.region || search.country){
            const searchTerm = search.region || search.country;

            const filtData = data.filter((place)=> 
                place.name.official.toLowerCase().includes(searchTerm.toLowerCase()) || 
                place.region.toLowerCase() === searchTerm.toLowerCase()
            )
            .sort((a, b) => a.name.common.localeCompare(b.name.common));
            
            setFilteredData(filtData);
        } else {
            setFilteredData([...data].sort((a, b) => a.name.common.localeCompare(b.name.common)));
        }
    }, [search, data]);

    return (
        <>
            <Header />
            <Navigation search={handleRegion} />
            <CountryContainer search={search} data={filteredData} />
        </>
    )
};