import { signal } from "@preact/signals-react"

export const isDarkMode = signal(localStorage.getItem('darkMode') == 'true'? true: false);
export const UserData = signal({name:"", email:"", picture:"", id:"", role:"", loggedIn:false});