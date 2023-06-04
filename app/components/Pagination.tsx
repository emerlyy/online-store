import Link from "next/link";
import { BiFirstPage, BiLastPage } from 'react-icons/bi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

interface Props {
    totalPages: number,
    currentPage: number,
    path: string
}

const linkStyle = 'px-3 py-1 rounded-sm';

const Pagination = ({ totalPages, currentPage, path }: Props) => {

    let pages = [];

    for (let i = currentPage - 3; i < currentPage + 4; i++) {
        if (i < 1) continue;
        if (i > totalPages) continue;
        pages.push(i);
    }

    return (
        <ul className="flex list-style-none items-center justify-center text-md">
            <li><Link href={`${path}?page=${1}`}><BiFirstPage className="m-1 text-[1.25rem]" /></Link></li>
            <li><Link href={`${path}?page=${Math.max(currentPage - 1, 1)}`}><GrFormPrevious className="m-1 text-[1.1rem]" /></Link></li>
            {
                pages.map(num => {
                    const isActive = num === currentPage;
                    return <li key={num}><Link className={`${linkStyle}${isActive ? ' bg-gray-800 text-white' : ''}`} href={`${path}?page=${num}`}>{num}</Link></li>
                })
            }
            <li><Link href={`${path}?page=${Math.min(currentPage + 1, totalPages)}`}><GrFormNext className="m-1 text-[1.1rem]" /></Link></li>
            <li><Link href={`${path}?page=${totalPages}`}><BiLastPage className="m-1 text-[1.25rem]" /></Link></li>
        </ul>
    )
}

export default Pagination;