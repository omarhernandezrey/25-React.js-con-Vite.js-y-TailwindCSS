import { createContext } from 'react';
import { RouterProvider } from 'react-router-dom';

const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    return (
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    )
}