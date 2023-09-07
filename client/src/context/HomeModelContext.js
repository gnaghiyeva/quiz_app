import {  createContext, useContext, useState } from "react";

const HomeContext = createContext();

export const HomeContextProvider = ({children})=>{
    const [models, setModels] = useState([]);

    return (
        <HomeContext.Provider value={[models,setModels]}>
            {children}
        </HomeContext.Provider>
    )
}

export const useHomeContext = ()=> useContext(HomeContext);