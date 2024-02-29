import React from "react";

  import { CiLight } from "react-icons/ci";
  import { CiDark } from "react-icons/ci";
import { isDarkMode } from "../../Globals";

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
      <div  onClick={handleToggleDarkMode} style={{paddingRight: "10px",cursor:"pointer", userSelect:"none", transform: "scale(1)", fontSize:"1.7em"}}>
       {isDarkMode.value? <CiDark fontSize="1.1em" /> : <CiLight fontSize="1.1em" /> }
      </div>

</>
  );
}

export default ThemeController;
