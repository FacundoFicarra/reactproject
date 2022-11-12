import React,{useState,createContext} from 'react'


export const contextoGeneral = createContext()




export default function ContextContainer({children}) {
    
    const [darkMode, setdarkMode] = useState(false)
    return (
        <contextoGeneral.Provider value={{darkMode,setdarkMode}}>
            {children}
        </contextoGeneral.Provider>
    )
}
