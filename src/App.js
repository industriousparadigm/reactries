import React from 'react'
import Header from './Header'
import CountriesList from './CountriesList'
import './App.sass'

export default function App() {
  return (
    <div className="hero">
      <Header />
      <CountriesList />
    </div>
  )
}