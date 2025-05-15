"use client";

import { useRouter } from 'next/navigation';
import "@/app/(marketing)/lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NavIcon = ({ onClick, navOpen, params, slug }: any) => {
    const icon = navOpen ? faArrowLeft : faArrowRight;
    const router = useRouter();
    const splitName = params?.split('/')[1]

    return (<div className="w-full flex justify-between items-center p-2">
        <div className='flex items-center'>
            <FontAwesomeIcon
                icon={icon}
                onClick={onClick}
                style={{ color: "var(--secondary3)" }}
                className="text-sm h-full cursor-pointer mr-3 font-bold"
            />
            <h2 className='font-bold text-black'>{params ? splitName.toUpperCase() : slug.toUpperCase()}</h2>
        </div>

        <button className="bg-(--secondary3) text-white text-sm font-bold rounded-sm px-2 py-1 cursor-pointer" onClick={() => router.back()}>Back</button>
    </div>
    )

};

export default NavIcon;

