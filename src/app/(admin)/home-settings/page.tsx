"use client"

import Carts from "@/app/(admin)/component/Carts"
import homeCartsData from "@/app/(admin)/datas/homeCarts.json"
import SideBar from "@/app/(admin)/partial/sidebar";
import NavIcon from "@/app/(admin)/component/NavIcon";
import { useState } from "react";
import "@/app/(marketing)/lib/fontawesome";
import { usePathname } from "next/navigation";

const Home = () => {
    const [navOpen, setNavOpen] = useState(true);
    const pathName = usePathname();

    const handleClick = () => setNavOpen(!navOpen);

    return <div className="w-full h-[100vh] flex justify-between">
        <SideBar navOpen={navOpen} onClick={handleClick} />
        <div className={`${navOpen ? "container translate-x-0 lg:translate-x-[250px] md:translate-x-[250px] w-full lg:w-(--containerwidth) md:w-(--containerwidth) " : "w-full lg:w-full md:w-full md:translate-x-[0px] lg:translate-x-[0px]"} absolute top-19 transition duration-400 ease-in-out p-5`}>
            <NavIcon onClick={handleClick} navOpen={navOpen} params={pathName} />
            {/* children */}
            <div className={`grid grid-flow-col grid-rows-2 lg:grid-rows-1 xl:grid-rows-1 gap-4 mt-2`}>
                {homeCartsData?.data?.map((items: any) => {
                    return <Carts data={items} key={items?.id} />
                })}
            </div>
        </div>
    </div>
}

export default Home