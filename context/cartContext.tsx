'use client'

import { Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface CartItem {
    product: Product,
    quantity: number
}

export type CartContextType = {
    items: CartItem[],
    addItem: (item: CartItem) => void,
    deleteItem: (id: number) => void
}

const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (newItem: CartItem) => {
        const oldItemIdx = items.findIndex(item => item.product.id === newItem.product.id);
        if (oldItemIdx < 0) {
            setItems(prev => [...prev, newItem]);
        } else if (items[oldItemIdx].quantity !== newItem.quantity) {
            setItems(prev => prev.map(item => item.product.id === newItem.product.id ? newItem : item))
        }
    }

    const deleteItem = (id: number) => {
        setItems(prev => prev.filter(item => item.product.id !== id));
    }

    return (
        <CartContext.Provider value={{ items, addItem, deleteItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => {
    const cartContext = useContext(CartContext);
    if (!cartContext) throw new Error('Cart context is null');
    return cartContext;
};