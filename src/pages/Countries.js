import React, { useState, useEffect,useContext } from 'react'
import '../styles/Count.css';
import { Link } from 'react-router-dom';

import { ThemeContext } from "../ThemeContext";


const url = ` https://restcountries.com/v3.1/all`
const Countries = () => {
  const { darkMode } = useContext(ThemeContext);
 const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [searchTittle, setSearchTittle] = useState('')
 const fetchCountryData = async () => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)

  }
  useEffect(() => {
    fetchCountryData()

  }, [])
  const remove = (latlng) => {
    const newCountry = countries.filter((country) => country.latlng !== latlng)
    setCountries(newCountry)
  }

  return (
    <>
 <section className={darkMode ? 'filter': 'filter'}>
        <form className="control-panel">
          <input className={darkMode ? 'input': 'inputlight'}
           type="search" name="search" id="search" placeholder='search for a country...'
            onChange={(e) => setSearchTittle(e.target.value)} />
        </form>

        <div className='region-filter'>
          <select name="select" id="select" className={darkMode ? 'select': 'selectlight'} onChange={(e) => setSearch(e.target.value)}
          >
            <option value="Filter by region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
      <section className='grid'>
        {countries.filter((value) => {
          if (searchTittle === '') {
            return value

          } else if (value.name.common.toLowerCase().includes(searchTittle.toLowerCase())) {
            return value;
          }
        })


          .filter((value) => {
            if (search === '') {
              return value

            } else if (value.region.toLowerCase().includes(search.toLowerCase())) {
              return value;
            }
          })




          .map((country) => {
            const { latlng,
              name,
              population,
              region,
              capital,
              flags } = country
            return <article key={latlng}>
              <div>
                <img src={flags.svg} alt={name.common} />
                <div className={darkMode ?'details':'detailslight'}>
                  <h3 className='country-name'>{name.common}</h3>
                  <h4> Population: <span>   {population} </span></h4>
                  <h4>Region: <span> {region} </span></h4>
                  <h4>Capital: <span> {capital} </span></h4>
                  <div className='divbtn'>
                 <button className={darkMode ? 'button':'buttonlight'}> <Link to={`/Countries/${name.common}`} 
                 className={darkMode ? 'link': 'linklight'}>
                  LearnMore</Link>
                  </button>
                  <button className={darkMode ? "button":'buttonlight'} onClick={() => remove(latlng)}>RemoveCountry</button>
                  </div>
                </div>

              </div>

            </article>


          })}
      </section>

    </>
  )
}

export default Countries
