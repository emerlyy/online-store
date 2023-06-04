import { ProductResponse } from "@/types"
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
    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}${skip}`);
    const data = await res.json();
    return data;
}

const Category = async ({ params: { category }, searchParams: { page } }: Props) => {

    const currentPage = Number.parseInt(page || '1');

    const products = await getProducts(currentPage, category);

    const totalPages = Math.ceil(products.total / products.limit);

    return (
        <main className='flex flex-col justify-center items-center py-4 md:container mx-auto'>
            <div className='flex-grow pb-4 w-full'>
                <Title extraClasses='pb-4'>{`${category[0].toUpperCase()}${category.slice(1)}`}</Title>
                <ItemGridList items={products.products} />
            </div>
            {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} path={`/${category}`} />}
        </main>
    )
}

export default Category