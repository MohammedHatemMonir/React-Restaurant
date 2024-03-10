import { signal } from "@preact/signals-react"

export const isDarkMode = signal(localStorage.getItem('darkMode') == 'true'? true: false);
export const UserData = signal(localStorage.getItem('UserData')? JSON.parse(localStorage.getItem('UserData')): {loggedIn:false});