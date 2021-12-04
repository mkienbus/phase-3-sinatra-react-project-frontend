
// container component to render Country
function Countries (){

    return(
        <div>
            {/* fetch request for all countries */}
            <h3>Countries</h3>
        </div>
    )

}

export default Countries;

// useEffect(() =>{
//     fetch("http://localhost:9292/countries")
//     .then((r) => r.json())
//     .then((data) => console.log(data));
//   }, [])