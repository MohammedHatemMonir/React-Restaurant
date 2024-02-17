import React from "react";

import { isDarkMode } from "./Globals";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

function ThemeController() {

  // const isDarkMode = useSignal(localStorage.getItem('darkMode') === 'true')



  const handleToggleDarkMode = () => {
      if(isDarkMode.value) //if it's dark mode:
      {
          document.body.classList.remove("dark")
          
      }else{
        document.body.classList.add('dark');
      }
      isDarkMode.value = !isDarkMode.value;
      localStorage.setItem('darkMode', isDarkMode.value);
  };


  
  return (
<>
      <div className= {`d-flex justify-content-center align-items-center themeControl`}
                        onClick={handleToggleDarkMode} 
                        style={{paddingRight: "5px",cursor:"pointer", userSelect:"none", transform: "scale(1)", fontSize:"1.5em"}}>


          {isDarkMode.value? <CiDark fontSize="1em" /> : <CiLight fontSize="1em" /> }


      </div>

</>
  );
}

export default ThemeController;
