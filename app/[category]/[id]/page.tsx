'use client'

import ImageViewer from "@/app/components/ImageViewer";
import Loading from "@/app/components/Loading";
import Quantity from "@/app/components/Quantity";
import { useCart } from "@/context/cartContext";
import { useFetch } from "@/hooks/useFetch";
import { useQuantity } from "@/hooks/useQuantity";
import { Product } from "@/types";
import { FiShoppingCart } from "react-icons/fi";

// const getProduct = async (id: string): Promise<Product> => {
//     const res = await fetch(`https://dummyjson.com/products/${id}`);
//     const data = await res.json();
//     return data;
// }

interface Props {
    params: {
        id: string
    }
}

const ProductPage = ({ params: { id } }: Props) => {
    //  const product = await getProduct(id);

    const { data: product, status, error } = useFetch<Product>(`https://dummyjson.com/products/${id}`)

    const cartContext = useCart()

    const [quantity, increase, decrease] = useQuantity(1);

    const addItemToCart = () => {
        if (product) cartContext.addItem({ product, quantity })
    };

    if (status === 'loading') return <Loading />;

    if (error) return <h1>Something went wrong :(</h1>

    if (!product) return <h1>Item not found</h1>

    return (
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-[400px_1fr] gap-x-10 gap-y-5 lg:py-16 md:py-10 sm:py-6 py-4 px-4">
           <h2 className="inline md:hidden text-3xl font-black text-[--secondary-color]">{product.title}</h2>
            <ImageViewer images={product.images}/>
            <div>
                <h2 className="hidden md:inline text-3xl font-black text-[--secondary-color]">{product.title}</h2>
                <span className="hidden md:block text-lg font-medium mb-2">{product.category}</span>
                <div className="mb-2">{product.stock} Stocks Left</div>
                <span className="block mb-4 font-medium text-2xl text-black">${product.price}</span>
                <div className="flex items-center gap-x-4 mb-4">
                    Quantity: <Quantity quantity={quantity} increase={increase} decrease={decrease} />
                </div>
                <div className="grid grid-cols-2 gap-x-6 mb-4">
                    <button
                        onClick={addItemToCart}
                        className="flex items-center justify-center bg-[--secondary-color] text-white py-2 gap-x-2 transition-opacity hover:opacity-80">
                        <FiShoppingCart className="text-lg" /> Add To Cart
                    </button>
                    <button className="bg-green-800 text-white py-2 transition-opacity hover:opacity-80">Buy Now</button>
                </div>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductPage