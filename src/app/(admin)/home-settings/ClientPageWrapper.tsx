
"use client";

import SideBar from "@/app/(admin)/partial/sidebar";
import NavIcon from "@/app/(admin)/component/NavIcon";
import React, { useState } from "react";
import SliderSettings from "@/app/(admin)/home-settings/SliderSettings";

export default function ClientPageWrapper({ slug }: { slug: string }) {
    const [navOpen, setNavOpen] = useState(true);
    const handleClick = () => setNavOpen(!navOpen);

    return (
        <div className="w-full h-[100vh] flex justify-between">
            <SideBar navOpen={navOpen} onClick={handleClick} />
            <div
                className={`${navOpen
                    ? "container translate-x-0 lg:translate-x-[250px] md:translate-x-[250px] w-full lg:w-(--containerwidth) md:w-(--containerwidth) "
                    : "w-full lg:w-full md:w-full md:translate-x-[0px] lg:translate-x-[0px]"
                    } absolute top-19 transition duration-400 ease-in-out p-5`}
            >
                <NavIcon onClick={handleClick} navOpen={navOpen} slug={slug} />
                {/* children */}
                {
                    slug === 'home-slider' ? <SliderSettings /> : null
                }
            </div>
        </div>
    );
}
