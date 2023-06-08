'use client'

import { useCategories } from "@/hooks/useCategories";
import { useToggle } from "@/hooks/useToggle";
import { formatKebabCase } from "@/utils/formatKebabCase";
import Link from "next/link";
import { createPortal } from "react-dom";
import { BiCategory, BiX } from "react-icons/bi";

const Categories = () => {

    const [categories, status] = useCategories();

    const [isCategoriesActive, toggleIsCategoryActive] = useToggle(false);

    const icon = isCategoriesActive ? <BiX className='lg:text-3xl md:text-2xl text-xl' /> : <BiCategory className='lg:text-3xl md:text-2xl text-xl' />;

    return (
        <>
            <button
                className='flex items-center gap-x-1 bg-[#4e4c4c] rounded-lg px-2 py-1 text-white font-medium transition-colors hover:bg-[#7a7979]'
                onClick={() => toggleIsCategoryActive()}>
                {icon} <span className="lg:text-base sm:text-sm text-xs">Categories</span>
            </button>
            {
                isCategoriesActive &&
                <>
                    {createPortal(
                        <div className='fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.5)] z-40' onClick={() => toggleIsCategoryActive(false)} />,
                        document.body
                    )}

                    <div className='absolute top-full left-0 md:w-11/12 w-full bg-white rounded-b-sm sm:py-6 py-4 sm:px-3 px-2 animate-fadeDown'>
                        {
                            status === 'loading'
                                ? <h2>Loading...</h2>
                                : (
                                    <ul className='grid sm:grid-cols-3 grid-cols-2 md:pl-6 sm:pl-4 pl-2 md:gap-x-6 gap-x-4 gap-y-2 items-center justify-center sm:text-base text-sm'>
                                        <li key='all'><Link href={`/all-products`} onClick={() => toggleIsCategoryActive(false)}>All Products</Link></li>
                                        {categories?.map(category => <li key={category}><Link href={`/${category}`} onClick={() => toggleIsCategoryActive(false)}>{formatKebabCase(category)}</Link></li>)}
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