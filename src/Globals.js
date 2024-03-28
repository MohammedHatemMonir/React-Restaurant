import { signal } from "@preact/signals-react"

export const isDarkMode = signal(localStorage.getItem('darkMode') == 'true'? true: false);
export const UserData = signal({loggedIn:true});

export const Cart = signal({ResId:"",meals:[]});


export const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
