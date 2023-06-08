'use client'

import { useCart } from "@/context/cartContext";
import { useToggle } from "@/hooks/useToggle";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BiX } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
    const cartRef = useRef<HTMLDivElement | null>(null);

    const cartContext = useCart();

    const [isCartOpened, toggleIsCartOpened] = useToggle(false);

    const toggleCartOpen = () => toggleIsCartOpened();
    const deleteItem = (id: number) => () => cartContext.deleteItem(id);
    console.log(cartContext)

    useEffect(() => {
        const closeCart = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.closest('#cart') === cartRef.current) return;
            toggleIsCartOpened(false);
        }
        if (isCartOpened) {
            document.body.addEventListener('click', closeCart);
        }
        return () => { document.body.removeEventListener('click', closeCart) }
    }, [isCartOpened, toggleIsCartOpened]);

    const itemsCount = cartContext.items.length;

    return (
        <div ref={cartRef} id='cart' className="relative flex items-center justify-center">
            <button onClick={toggleCartOpen}>
                <FiShoppingCart className='text-white lg:text-3xl text-2xl' />
            </button>
            {itemsCount > 0 && <div className="absolute right-0 bottom-0 translate-x-3/4 translate-y-1/4 bg-red-500 rounded-full w-4 h-4 grid place-items-center text-xs text-white transition-all">{itemsCount}</div>}
            {
                isCartOpened && (
                    <div className="absolute top-full right-0 mt-3 p-4 pt-6 min-w-[160px] rounded-b-sm bg-white animate-fadeDown">
                        {
                            itemsCount > 0 ? (
                                <>
                                    <ul className="flex flex-col gap-y-3 mb-4">
                                        {cartContext.items.map(item => (
                                            <li className="w-[200px] flex border-b border-gray-400 pb-3 last:border-b-0 last:pb-0" key={item.product.id}>
                                                <div className="flex-grow flex flex-col">
                                                    <Link href={`/${item.product.category}/${item.product.id}`} className="font-medium mb-2 text-sm w-fit">{item.product.title} - {item.quantity}pcs</Link>
                                                    <span className="font-medium text-sm text-green-800">${item.product.price}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <button onClick={deleteItem(item.product.id)}><BiX className="text-2xl text-red-400" /></button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href='/order' className="bg-[--secondary-color] text-white px-3 py-2 rounded-sm hover:opacity-80">Order</Link>
                                </>)
                                : <div>No items in cart</div>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Cart;