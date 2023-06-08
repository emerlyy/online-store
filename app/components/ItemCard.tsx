import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from 'react-icons/fa';

interface Props {
    item: Product
}

const ItemCard = ({ item }: Props) => {
    return (
        <Link href={`/${item.category}/${item.id}`} className="md:w-[250px] bg-[#fff] p-2 h-full flex flex-col justify-between rounded-sm">
            <div className="sm:h-40 w-full">
                <Image width={240} height={160} className="h-full w-full object-contain" src={item.thumbnail} alt={item.title} />
            </div>
            <div className="p-2">
                <h2 className="font-bold sm:text-base text-sm line-clamp-2">{item.title}</h2>
                <div className="flex items-center flex-wrap">
                    <span className="sm:flex hidden items-center mr-2 text-sm">{Math.floor(item.rating)} <FaStar className="text-yellow-500" /></span>
                    <span className="text-xs text-gray-400 flex-grow sm:w-auto w-full mr-2">{item.category[0].toUpperCase() + item.category.slice(1)}</span>
                    <span className="sm:hidden flex items-center mr-2 text-sm">{Math.floor(item.rating)} <FaStar className="text-yellow-500" /></span>
                    <span className="text-base text-green-800 font-bold flex-grow text-end">${item.price}</span>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard;