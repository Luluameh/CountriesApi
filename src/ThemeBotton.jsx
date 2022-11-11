import React, { useContext } from "react";
import {  FaMoon , FaSun  } from 'react-icons/fa';
import './styles/Count.css';


import { ThemeContext } from "./ThemeContext";

function ThemeBotton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <span id="theme-toggle"
     onClick={handleTheme}
    >

 { darkMode ?  <FaSun size={20} className='sun' />
 :<FaMoon size={20} className='moon'/> }


    </span>
  );
}

export default ThemeBotton;
