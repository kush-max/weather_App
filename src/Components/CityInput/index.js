import React,{useState,useEffect} from 'react';

const CityInput =() =>{

    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("mumbai");

    const handleclick =()=>{
            const fetchApi =async()=>{
                const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4ba1f906efb66bcee57a9821b2836391`
                const response = await fetch(url);
                const resjson=await response.json();
                setCity(resjson.main);

            };
            fetchApi();

    };
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    className="input-field"
                    onChange ={(e)=>{
                            setSearch(e.target.value)
                    } }/>
                    <button onClick={handleclick}>search</button>
                </div>
        
        {   !city ? (
                <p>No data found</p>
                    ):(
                    <div>
                        <div className="information">
                            <h2 className="location">
                            <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                            {city.temp}
                            </h1>
                            <h3 className="temp-min">Min:{city.temp_min} | Max: {city.temp_max}</h3>
                        </div>
                        <div className="wave-one"></div>
                        <div className="wave-two"></div>
                        <div className="wave-three"></div>
                    </div>
                    
                    )} 
            </div>   
           
        </>
    )
}
export default CityInput;