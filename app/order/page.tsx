'use client'

import { useCart } from "@/context/cartContext";

export default function Order() {
    const cartContext = useCart();

    return (
        <main>
            <h2>Order Page</h2>
            <h3>Cart:</h3>
            <ul>
                {
                    cartContext.items.map(item => <li key={item.product.id}>{item.product.title} --- {item.quantity}pcs --- ${item.product.price * item.quantity}</li>)
                }
            </ul>
        </main>
    )
}