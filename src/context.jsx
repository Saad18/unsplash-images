import {createContext, useContext, useState, useEffect} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    //Toggling the theme button
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', newDarkTheme); // classList property is read-only
        console.log(body);
    }

    return <AppContext.Provider
     value={{isDarkTheme, toggleDarkTheme}}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => useContext(AppContext);