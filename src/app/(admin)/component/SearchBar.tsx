import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({onChange}: any) => {
    return <div className="w-[200px] rounded-sm border-2 border-gray-300 flex justify-center items-center">
        <input type="text" className="outline-none w-[150px] text-sm text-(--secondary3) p-2" placeholder="Search" onChange={onChange}/>
        <span className="w-[30px]"><FontAwesomeIcon icon={faMagnifyingGlass} className="text-(--secondary3) text-md cursor-pointer" /></span>
    </div>
}

export default SearchBar