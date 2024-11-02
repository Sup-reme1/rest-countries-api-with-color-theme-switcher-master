export default function CountryCard(props){
    
    const country = props.place;

    return(
        <div>
            <img src={country.flags.png} width='200px' alt="flag" />
            <div>
                <h2>{country.name}</h2>
                <p><span>Population: </span>{country.population}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>Capital: </span>{country.capital}</p>
            </div>
        </div>
    )
}