import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AdminHeader = () => {
    return <div className="w-full bg-(--background) flex justify-center p-3 h-18 fixed z-10 border-b-2 border-gray-300">
        <div className="w-full flex justify-between items-center">
            <div className="h-full w-[200px] flex justify-center items-center">
                <Image
                    className="dark:invert w-full object-contain cursor-pointer"
                    src="/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                />
            </div>
            <div className="mt-3 md:mt-0 flex justify-between item-center cursor-pointer font-bold text-(--secondary3)">
                <FontAwesomeIcon icon={faUser} className="text-(--secondary3) text-xl mr-2 h-5" />
                User
            </div>
        </div>
    </div>
}

export default AdminHeader