import {createContext, useContext, useState, useEffect} from 'react';

const AppContext = createContext();
// initial dark mode setup for default dark mode browser
const getInitialDarkMode = () =>{
    const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme:dark)'
    ).matches;
    return prefersDarkMode;
}

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState('cat');
    //Toggling the theme button
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme);
        // const body = document.querySelector('body');
        // body.classList.toggle('dark-theme', newDarkTheme); // dark-theme is css property
        
    };

    useEffect(()=>{
        // const body = document.querySelector('body');
        // body.classList.toggle('dark-theme', isDarkTheme);
        document.body.classList.toggle('dark-theme', isDarkTheme);
    },[isDarkTheme])

    return <AppContext.Provider
     value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => useContext(AppContext);