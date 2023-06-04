import Cart from './Cart';
import Categories from './Categories';
import Logo from './Logo';

const Header = () => {
    return (
        <header className='px-12 bg-black z-50'>
            <div className='relative h-[4.5rem] flex items-center'>
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