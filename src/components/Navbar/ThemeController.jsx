
import {
  useSignal,
  useComputed,
  batch,
  computed,
  signal,
} from "@preact/signals-react";


export default function ThemeController() {

  const isDarkMode = signal(false);

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
      <div className= {`d-flex justify-content-center align-items-center ${isDarkMode.value? "darkIcon": "lightIcon"}`} onClick={handleToggleDarkMode} style={{cursor:"pointer", userSelect:"none"}}>
      themeController
      </div>

</>
  );
}

