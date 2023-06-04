import { useState } from "react"

export const useQuantity = (initialQuantity: number): [number, () => void, () => void] => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const changeQuantity = (value: number) => {
        setQuantity(Math.max(quantity + value, 1));
    };

    const increaseQuantity = () => changeQuantity(1);

    const decreaseQuantity = () => changeQuantity(-1);

    return [quantity, increaseQuantity, decreaseQuantity];
}