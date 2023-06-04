import Link from "next/link";
import { FaShopify } from "react-icons/fa";

type LogoColor = 'white' | 'black';

interface Props {
    color?: LogoColor
}

const Logo = ({ color = 'black' }: Props) => {

    return (
        <Link href='/' className={`text-${color} flex items-center gap-x-3 text-2xl font-bold tracking-widest`}>
            <FaShopify className="text-5xl"/>
            Emerly shop
        </Link>
    )
}

export default Logo;