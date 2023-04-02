import React from 'react'

const Article = ({flags, name, population, region, subregion}) => {
  return (
    <article>
        <img src={flags.svg} alt="flags" />
        <h2>{name.common}</h2>
        <ul>
            <li>Population: {population}</li>
            <li>Region: {region}</li>
            <li>Subregion: {subregion}</li>
        </ul>
    </article>
  )
}

export default Article