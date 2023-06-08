import { ProductResponse } from '@/types'
import ItemGridList from './components/ItemGridList'
import Pagination from './components/Pagination'
import Image from 'next/image'
import Link from 'next/link'

// interface Props {
//   searchParams: {
//     page: string
//   }
// }

// const getProducts = async (page: number = 1): Promise<ProductResponse> => {
//   const limit = 10;
//   const skipCount = (page - 1) * 10;
//   const skip = page > 1 ? `&skip=${skipCount}` : '';
//   const res = await fetch(`https://dummyjson.com/products?limit=${limit}${skip}`, { cache: 'no-store' });
//   const data = await res.json();
//   return data;
// }

// export default async function Home({ searchParams: { page } }: Props) {
//   const currentPage = Number.parseInt(page || '1');

//   const products = await getProducts(currentPage);

//   const totalPages = Math.ceil(products.total / products.limit);

//   return (
//     <main className='flex flex-col justify-center items-center py-4 md:container mx-auto'>
//       <div className='flex-grow pb-4 w-full'>
//         <Title extraClasses='pb-4'>All products</Title>
//         <ItemGridList items={products.products} />
//       </div>
//       {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} path={`/`} />}
//     </main>
//   )
// }

export default function Home() {
  return (
    <section className='flex sm:flex-row flex-col mx-auto max-w-5xl h-[calc(100vh_-_80px)] lg:px-0 md:px-4 px-2 md:py-8 sm:py-6 py-4 gap-6 items-center justify-center'>
      <div className='lg:w-[600px] sm:w-[400px] w-full sm:h-auto h-[50vh]'>
        <Image src='/home-image.png' alt='' width={600} height={600} className='w-full h-full object-contain' />
      </div>
      <div className='flex flex-col justify-center sm:items-start items-center sm:text-start text-center'>
        <h1 className='font-black lg:text-[3rem] md:text-[2.5rem] text-[2rem] text-[--secondary-color]'>Emerly Shop</h1>
        <p className='font-medium lg:text-2xl md:text-xl sm:text-lg text-base text-black mb-6'>A walk-in-a-park online shopping experience!</p>
        <Link
          href='/all-products'
          className='w-fit px-5 py-3 font-bold 
          sm:text-base text-sm text-[--primary-color] 
          bg-[--secondary-color] rounded-full hover:opacity-80'
          >
          Shop Now!
        </Link>
      </div>
    </section>
  )
}
