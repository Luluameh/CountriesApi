import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import AppRoute from './routes';




function App() {
 const { darkMode } = useContext(ThemeContext);
 
  return (
    
    <div className= {darkMode ?'Appdark':'App'}>
   <AppRoute />
   
      
    </div>

  );
}

export default App;
