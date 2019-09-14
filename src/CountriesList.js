import React from 'react'
import { useFetch } from './hooks'
import CountryCard from './CountryCard'

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all'

const CountriesList = () => {
  const [data, loading] = useFetch(COUNTRIES_URL)

  return (
    <div className="columns is-multiline is-centered">
      {
        !loading
          ? data.map(country => <CountryCard key={country.alpha3Code} country={country} />)
          : <h3>loading</h3>
      }
    </div>
  )
}

export default CountriesList