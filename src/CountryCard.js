import React from 'react'
import { stringShortener } from './utils'

const CountryCard = ({ country }) => {
  return country
    ? (
      <div className="column is-one-fifth">
        <p className="country-name">{country.name}</p>
        <figure className="image is-5by3">
          <img src={country.flag} alt={country.name + " flag"} />
        </figure>

      </div>
    )
    : "loading"
}

export default CountryCard
