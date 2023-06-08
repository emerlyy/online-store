import Link from "next/link";
import { FaShopify } from "react-icons/fa";

type LogoColor = 'white' | 'black' | 'secondary';

interface Props {
    color?: LogoColor
}

const Logo = ({ color = 'black' }: Props) => {
    const logoColor = color === 'secondary' ? '[--secondary-color]' : color;
    return (
        <Link href='/' className={`text-${logoColor} flex items-center gap-x-3`}>
            <FaShopify className="lg:text-5xl sm:text-4xl text-3xl" />
            <span className="lg:text-2xl text-lg font-bold lg:tracking-widest tracking-wider sm:inline hidden">Emerly shop</span>
        </Link>
    )
}

export default Logo;