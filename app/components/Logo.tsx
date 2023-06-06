import Link from "next/link";
import { FaShopify } from "react-icons/fa";

type LogoColor = 'white' | 'black' | 'secondary';

interface Props {
    color?: LogoColor
}

const Logo = ({ color = 'black' }: Props) => {
    const logoColor = color === 'secondary' ? '[--secondary-color]' : color;
    return (
        <Link href='/' className={`text-${logoColor} flex items-center gap-x-3 text-2xl font-bold tracking-widest`}>
            <FaShopify className="text-5xl" />
            Emerly shop
        </Link>
    )
}

export default Logo;