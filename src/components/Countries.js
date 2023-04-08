import React, { useState, useEffect } from 'react'
import Article from "./Article";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const regions = [
    { name: 'Europe',},
    { name: 'Asia',},
    { name: 'Africa',},
    { name: 'Oceania',},
    { name: 'Americas',},
    { name: 'Antarctic',}
  ]
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
  
  const searchCountry=async()=>{
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)  
      const data = await res.json()
      setCountries(data)
    } catch (error) {
      console.log(error)
    }
  }  

  const filterByRegion = async(region)=>{
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      const data = await res.json();
      setCountries(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = (e)=>{
    e.preventDefault();
    searchCountry();
  }

  const handleFilterByRegion = (e) =>{
    e.preventDefault();
    filterByRegion(e.target.value);
  }

  return (
   <>
    {!countries? (
      <h1 className="">Loading</h1>
    ) : (
      <section className="container mx-auto p-10">
        {/*form*/}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <form onSubmit={handleSearch} autoComplete="off" className="max-w-4xl md:flex-1">
            <input  
              className="px-2 py-1 text-gray-700 placeholder-gray-800 w-full shadow rounded outline-none"
              type="text" 
              id="searchContry" 
              name="searchCountry" 
              placeholder="Search"
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
              required 
            />
          </form>
          <form onSubmit={handleFilterByRegion}>
            <select 
              value={regions.name}
              onChange={(e)=>filterByRegion(e.target.value)}
              className="w-52 py-1 outline-none shadow rounded" name="filterByRegion" id="filterByRegion">
                {regions.map((region,index) =>(
                  <option key={index} value={region.name}>{region.name}</option>
                ))}
     
            </select>
          </form>
        </div>

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