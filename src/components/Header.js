import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import '../styles/Count.css';
import ThemeBotton from '../ThemeBotton';


const Header = () => {
 const { darkMode } = useContext(ThemeContext);


 return (
    <>
   <div    className={darkMode ? 'header':'light-header'} >
  
   <div >
   <h1> Where in the World are you ?</h1>
        </div>
        <div >
        <ThemeBotton/>
        </div>
 </div>
 
    </>
  )
}

export default Header