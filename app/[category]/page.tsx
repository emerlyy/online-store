import { ProductResponse } from "@/types"
import { formatKebabCase } from "@/utils/formatKebabCase"
import ItemGridList from "../components/ItemGridList"
import Pagination from "../components/Pagination"
import Title from "../components/Title"

interface Props {
    params: {
        category: string
    },
    searchParams: {
        page: string
    }
}

const getProducts = async (page: number = 1, category: string): Promise<ProductResponse> => {
    const limit = 10;
    const skipCount = (page - 1) * 10;
    const skip = page > 1 ? `&skip=${skipCount}` : '';
    const requestedCategory = category === 'all-products' ? '' : `/category/${category}`;

    const res = await fetch(`https://dummyjson.com/products${requestedCategory}?limit=${limit}${skip}`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data;
}

const Category = async ({ params: { category }, searchParams: { page } }: Props) => {

    const currentPage = Number.parseInt(page || '1');

    const products = await getProducts(currentPage, category);

    const totalPages = Math.ceil(products.total / products.limit);

    return (
        <main className='flex flex-col justify-center items-center sm:py-6 md:py-4 py-2 px-4 mx-auto'>
            <div className='flex-grow pb-4 w-full max-w-[1300px]'>
                <Title size="2xl" extraClasses='md:mb-8 sm:mb-6 mb-4 sm:pl-8'>{formatKebabCase(category)}</Title>
                <ItemGridList items={products.products} />
            </div>
            {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} path={`/${category}`} />}
        </main>
    )
}

export default Category