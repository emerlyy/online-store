import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from 'react-icons/fa';

interface Props {
    item: Product
}

const ItemCard = ({ item }: Props) => {
    return (
        <Link href={`/${item.category}/${item.id}`} className="w-[250px] bg-[#fff] p-2 h-full flex flex-col justify-between rounded-sm">
            <div className="h-40 w-full">
                <Image width={1000} height={1000} className="h-full w-full object-contain" src={item.thumbnail} alt={item.title} />
            </div>
            <div className="p-2">
                <h2 className="font-bold">{item.title}</h2>
                <div className="flex items-center">
                    <span className="flex items-center mr-2 text-sm">{Math.floor(item.rating)} <FaStar className="text-yellow-500" /></span>
                    <span className="text-xs text-gray-400 flex-grow">{item.category[0].toUpperCase() + item.category.slice(1)}</span>
                    <span className="text-base text-green-800 font-bold">${item.price}</span>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard;