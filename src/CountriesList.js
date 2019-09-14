import React, { useState } from 'react'
import { useFetch } from './hooks'
import CountryCard from './CountryCard'

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all'

const CountriesList = () => {
  const [data, loading] = useFetch(COUNTRIES_URL)
  const [searchTerm, setSearchTerm] = useState('')

  if (loading) return <h3>loading</h3>

  return (
    <div className="columns is-multiline is-centered">
      {
        data.map(country => country.name.includes(searchTerm) && <CountryCard key={country.alpha3Code} country={country} />)
      }
    </div>
  )
}

export default CountriesList