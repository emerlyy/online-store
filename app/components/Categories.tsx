'use client'

import { useFetch } from "@/hooks/useFetch";
import { useToggle } from "@/hooks/useToggle";
import { formatKebabCase } from "@/utils/formatKebabCase";
import Link from "next/link";
import { createPortal } from "react-dom";
import { BiCategory, BiX } from "react-icons/bi";

const Categories = () => {

    const { data: categories, status, error } = useFetch<string[]>('https://dummyjson.com/products/categories');

    const [isCategoriesActive, toggleIsCategoryActive] = useToggle(false);

    const icon = isCategoriesActive ? <BiX className='text-3xl' /> : <BiCategory className='text-3xl' />;

    return (
        <>
            <button
                className='flex items-center gap-x-1 bg-[#4e4c4c] rounded-lg px-2 py-1 text-white font-medium transition-colors hover:bg-[#7a7979]'
                onClick={() => toggleIsCategoryActive()}>
                {icon} Categories
            </button>
            {
                isCategoriesActive &&
                <>
                    {createPortal(
                        <div className='fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.5)] z-40' onClick={() => toggleIsCategoryActive(false)} />,
                        document.body
                    )}

                    <div className='absolute top-full left-0 w-11/12 bg-white rounded-b-sm py-6 px-3 animate-fadeDown'>
                        {
                            status === 'loading'
                                ? <h2>Loading...</h2>
                                : (
                                    <ul className='grid grid-cols-3 items-center justify-center'>
                                        {categories?.map(category => <li key={category} className='pl-6'><Link href={`/${category}`} onClick={() => toggleIsCategoryActive(false)}>{formatKebabCase(category)}</Link></li>)}
                                    </ul>
                                )
                        }
                    </div>
                </>
            }
        </>
    )
}

export default Categories;