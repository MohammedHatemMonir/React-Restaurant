import { signal } from "@preact/signals-react";

export const isDarkMode = signal(localStorage.getItem('darkMode') === 'true')

if (isDarkMode.value) {
    document.body.classList.add("dark")
  }