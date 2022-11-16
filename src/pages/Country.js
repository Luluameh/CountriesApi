import React,{useState,useEffect,useContext} from 'react'
import { Link , useParams
} from 'react-router-dom';
import '../styles/Country.css';
import {HiOutlineArrowSmLeft  } from 'react-icons/hi';
import { ThemeContext } from "../ThemeContext";




const arrow = <HiOutlineArrowSmLeft size={20} />
const Country = () => {
  const { darkMode } = useContext(ThemeContext);

 const[country,setCountry]=useState([])
 const[isloading, setIsloading]=useState(true)
 const {name}=useParams()
useEffect(() => {
  const fetchCountry= async()=>{
    const response= await fetch(`
    https://restcountries.com/v3.1/name/${name}
    `)
    const country= await response.json()
  setCountry(country)
setIsloading(false)
}
fetchCountry()
},[])
 return (
    <>
    {isloading ? <div>Loading.....oooo
this was created by Lucy Ameh Greg if this does not show. know that the problem is from the Api
    </div>:

<section className='country'>
  <div>
<button className={darkMode?'button':'buttonlight'}>
<Link to='/'className={darkMode?'link':'linklight'}>
{arrow}    BACK</Link>
</button>
</div>
{country.map((c)=>{
        const { latlng ,
          flags,
            name, 
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
            } = c
            return(
              <article key={latlng}>
                <div className='inner'>
<div className='flag'>
  <img src={flags.svg} alt={name.common} />
</div>
<div className='detail'>
  <div>
  <h2>
    {name.common}
    </h2>
    <h5> Native Name{nativeName}</h5>
    <h5>Population: <span>  {population} </span></h5>
   <h5>Region: <span>{region} </span></h5>
    <h5>Subregion: <span>  {subregion} </span></h5>
    <h5> Capital: <span>{capital}</span></h5>
    </div>
    <div>
      <h5> TopLevelDomain:{topLevelDomain}</h5>
      <h5>Languages {languages[1]}</h5>
      <h5> Currencies {currencies[0]}</h5>
</div>
  </div>
  </div>
  <div>
   <h3> Border Countries:</h3>
   <div className='border'>
  {borders.map((border)=>{
    return(
    <ul key={border}
  className={darkMode?'ul':'ullight'}  >
      <li>{border}</li>
  </ul>
    )
  })}
  </div>
  </div>


  
              </article>




            )

        })} 
    

</section>}

   </>
  )
}

export default Country