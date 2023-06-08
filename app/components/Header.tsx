import Cart from './Cart';
import Categories from './Categories';
import Logo from './Logo';

const Header = () => {
    return (
        <header className='lg:px-12 md:px-8 sm:px-6 px-4 bg-black z-50'>
            <div className='relative md:h-[4.5rem] h-[3rem] flex items-center'>
                <div className='flex-grow flex gap-x-6'>
                    <Logo color='white' />
                    <Categories />
                </div>
                <Cart />
            </div>
        </header>
    );
};

export default Header;