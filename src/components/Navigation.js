import { useState } from "react";

export default function Navigation(props){
    const [inputRegion, setInputRegion] = useState('');
    const [inputCountry, setInputCountry] = useState('');

    const handleInputCountry = (e) => {
        e.preventDefault();
        setInputCountry(e.target.value);
        console.log(inputCountry);
    };

    const handleOptionChange = (e) => {
        setInputRegion(e.target.value);
        props.region(inputRegion);
    };

    return(
        <div className="row-flex">
            <div>
                <img alt="search" />
                <input 
                    type="text" 
                    placeholder="Search for a country..."
                    value={inputCountry}
                    onChange={handleInputCountry}
                />
            </div>
            <select 
                value={inputRegion}
                onChange={handleOptionChange}    
            >
                <option value=''>Filter by Region</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
    )
}