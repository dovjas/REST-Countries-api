import React, { useState, useEffect } from 'react'
import Article from "./Article";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async()=>{
      try{
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data)
      }catch(err){
        console.log(err)
      }
    }
    getCountries()
  }, [])
  

  return (
   <>
    {!countries? (
      <h1 className="">Loading</h1>
    ) : (
      <section>
        {countries.map((country)=>(
          <Article key={country.name.common} {...country} />
        ))}
      </section>

    )
    
    }
   </>
  )
}

export default Countries