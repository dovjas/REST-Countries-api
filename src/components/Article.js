import React from 'react'
import {Link} from 'react-router-dom'

export default function Article ({flags, name, population, region, subregion})
{  
   return (
    <>
    <Link to= {`/${name.common}`} >
    <article className="bg-white hover:bg-gray-300 transition-all duration-200 rounded-lg shadow-lg overflow-hidden ">
        <img src={flags.svg} alt="flags" className="md:h-27 w-full object-cover" />
        <div className="p-4">
        <h2>{name.common}</h2>
        <ul>
            <li>Population: {population.toLocaleString()}</li>
            <li>Region: {region}</li>
            <li>Subregion: {subregion}</li>
        </ul>
        </div>
    </article>
    </Link>
    </>
  )
}