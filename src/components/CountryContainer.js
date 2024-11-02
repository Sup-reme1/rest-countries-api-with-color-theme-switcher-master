import CountryCard from "./CountryCard";
import data from './data.json';

export default function CountryContainer(props){
    // console.log(props.region);

    return(
        <div className="countries-container">
            {data.map((country)=>{
                return(
                <CountryCard key={country.name} place={country} />
                )
            })};     
        </div>
    )
}