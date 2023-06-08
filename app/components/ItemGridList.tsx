import { Product } from "@/types";
import ItemCard from "./ItemCard";

interface Props {
    items: Product[]
}

const ItemGridList = ({ items }: Props) => {
    return (
        <div className="grid sm:grid-cols-[repeat(auto-fit,_250px)] grid-cols-2 items-center justify-center gap-x-2 gap-y-6">
            {
                items.map(item => <ItemCard key={item.id} item={item} />)
            }
        </div>
    )
}

export default ItemGridList;