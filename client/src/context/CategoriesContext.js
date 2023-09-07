import {  createContext, useContext, useState } from "react";

const CategoriesContext = createContext();

export const CategoriesContextProvider = ({children})=>{
    const [categories, setCategories] = useState([]);

    return (
        <CategoriesContext.Provider value={[categories,setCategories]}>
            {children}
        </CategoriesContext.Provider>
    )
}

export const useCategoriesContext = ()=> useContext(CategoriesContext);