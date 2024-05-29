"use client"

import { PropsWithChildren, createContext, useContext, useState } from "react"

type CtxType = {
    products: any[],
    updateProduct: (prodId: number, quantity: number) => void
}

const Context = createContext<CtxType>({
    products: [],
    updateProduct: (prodId, quantity) => {
        null
    },
})

export const ProductsProvider = ({children}: PropsWithChildren) => {
    const [products, setProducts] = useState([])
    const updateProduct = () => {
        console.log("updating prod")
    }

    return (
        <Context.Provider value={{products, updateProduct}}>
            {children}
        </Context.Provider>
    )
}

export const useProductCtx = () => {
    const ctx = useContext(Context)

    return ctx
}