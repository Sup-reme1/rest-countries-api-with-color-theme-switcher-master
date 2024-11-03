import { useEffect, useState } from "react";

export default function Navigation({ search }){
    const [inputSearch, setInputSearch] = useState({country: '', region: ''});
    // const [inputCountry, setInputCountry] = useState('');

    const handleInputCountry = (e) => {
        e.preventDefault();
        setInputSearch((search)=>{
            return {...search, country:e.target.value}
        });
    };

    const handleOptionChange = (e) => {
        setInputSearch((search)=>{
            return {...search, region:e.target.value}
        });
    };

    useEffect(()=>{
        search(inputSearch);
    }, [inputSearch, search]);

    return(
        <div className="row-flex">
            <div>
                <img alt="search" />
                <input 
                    type="text" 
                    placeholder="Search for a country..."
                    value={inputSearch.country}
                    onChange={handleInputCountry}
                />
            </div>
            <select 
                value={inputSearch.region}
                onChange={handleOptionChange}    
            >
                <option value=''>Filter by Region</option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>Americas</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
    )
}