import { signal } from "@preact/signals-react"


export const toggle = signal(false);
export const isDarkMode = signal(localStorage.getItem('darkMode') === 'true'? true: false);
