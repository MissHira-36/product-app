import React, { createContext, useContext, useState } from "react";
const ProductContext = createContext();
export const ContextProvider = ({children}) => {
    const [contextState, setcontextState] = useState("Hayaa's BookShop");
    const collection = {
        contextState , 
        setcontextState,
    };
    return (
        <ProductContext.Provider value={collection}>
            {children}
        </ProductContext.Provider>
    );

};
export const useProductContext = () => {
    return useContext(ProductContext);
};