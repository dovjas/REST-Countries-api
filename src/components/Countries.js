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
      <section className="container mx-auto p-10">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country)=>(
          <Article key={country.name.common} {...country} />
        ))}
        </div>
      </section>

    )
    
    }
   </>
  )
}

export default Countries