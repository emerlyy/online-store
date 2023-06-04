'use client'

interface Props {
    quantity: number,
    decrease: () => void,
    increase: () => void
}

const Quantity = ({ quantity, decrease, increase }: Props) => {
    return (
        <div className="flex items-center justify-normal gap-x-2">
            <button className="w-5 h-5 bg-red-400 flex items-center justify-center text-white rounded-sm" onClick={decrease}>-</button>
            <span className="font-medium text-base ">{quantity}</span>
            <button className="w-5 h-5 bg-[--secondary-color] flex items-center justify-center text-white rounded-sm" onClick={increase}>+</button>
        </div>
    )
}

export default Quantity;