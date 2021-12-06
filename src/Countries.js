import Country from "./Country"


// container component to render Country
function Countries ({countries}){
    console.log(countries)
    const allCountries = countries.map((c) => <Country country = {c} key = {c.id}/>)
    return(
        <div>
            <h3>Countries:</h3>
                {allCountries}
        </div>
    )
}

export default Countries

