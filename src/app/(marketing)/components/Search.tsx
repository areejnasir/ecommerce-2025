import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return (
        <div className="w-[200px] md:w-[80%] h-full flex items-center gap-2 mr-2">
            <input
                placeholder="Search"
                className="outline-none border-b-2 border-(--secondary) w-[80%] bg-transparent text-blaxk text-sm pb-3"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-(--secondary) text-xl cursor-pointer" />
        </div>
    );
};

const CartIcon = () => {
    return <div className='p-1 relative cursor-pointer'>
        <FontAwesomeIcon icon={faCartShopping} className="text-black mt-2 text-xl" />
        <span className='rounded-full bg-(--secondary) m-0 px-1 text-white absolute top-0 right-0 text-xs'>0</span>
    </div>
}

export {Search, CartIcon};
