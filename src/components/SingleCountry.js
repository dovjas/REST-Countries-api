import React,{useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const SingleCountry = () => {
    const [country, setCountry] = useState([])
    const { name } = useParams()

    useEffect(()=> {
      const getSingleCountry = async()=> {
      try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const data = await res.json()
        setCountry(data)
      } catch(errr){
        console.log(errr)
      }
    }
      getSingleCountry()
    }
    , [name]);
  return (
    <section className="p-8 md:py-0 max-w-7xl mx-auto">
      {country.map((item)=>(
        <div key={item.population} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen">
          <article>
            <img src={item.flags.svg} alt={item.name.common} />
          </article>
          <article>
            <h1 className="font-bold text-gray-900 text-4xl lg:text-6xl">{item.name.official}</h1>
            <ul className="mt-4 my-2 flex flex-col gap-1 items-start justify-start text-slate-700 ">
              <li>Capital:{item.capital[0]}</li>
              <li>Population: {item.population.toLocaleString()} </li>
              <li>Region: {item.region} </li>
              <li>Subregion: {item.subregion} </li>
            </ul>
              {/*Border */}
              {item.borders &&(
                <>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Borders:</h3> 
                <ul className="flex gap-2 items-start justify-start ">
                  {item.borders.map((border, index)=>(
                    <li key={index}  className="bg-white p-2 rounded text-xs tracking-wide shadow">{border}</li>
                    ))}
                </ul>
            </>)
              }
              <Link to='/' className="inline-block bg-white py-1 px-6 rounded shadow text-xs text-gray-700 transition-all duration-300 hover:bg-gray-400">Back</Link>
          </article>
        </div>
      ))}
    </section>
  )
}

export default SingleCountry