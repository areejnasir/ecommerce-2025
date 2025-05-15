"use client";

import { Dropdown, GrayLinkBtn } from '@/app/(marketing)/components/BtnsAndSelect';
import UnorderedList from '@/app/(marketing)/components/List'
import { Search, CartIcon } from '@/app/(marketing)/components/Search';
import Image from 'next/image';
import { useState } from 'react';
import navData from "@/app/(marketing)/datas/header.json"

const Header = () => {
    return <header className="w-full">
        <TopBar />
        <HeaderBar />
    </header>
}

const TopBar = () => {
    const [currency, setCurrency] = useState<string>("usd");

    type CurrencyType = {
        name: string;
        value: string;
    };
    const currencyObj: CurrencyType[] = [
        { name: "USD", value: "usd" },
        { name: "EUR", value: "eur" },
        { name: "GBP", value: "gbp" },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(e.target.value);
    };

    return <div className="w-full flex justify-center py-3 px-3 bg-linear-(--darklinear)">
        <div className="container block sm:flex justify-between items-center">
            <p className="text-center sm:text-left text-white text-sm">Free shipping, 30-day return or refund guarantee.</p>
            <div className="flex justify-evenly">
                <ol className="list-style-none mt-2 sm:mt-0">
                    <GrayLinkBtn linkUrl="signin" name="SIGN IN" />
                    <GrayLinkBtn linkUrl="faq" name="FAQ'S" />
                    <Dropdown optionObj={currencyObj} change={handleChange} value={currency} />
                </ol>
            </div>
        </div>
    </div>
}

const HeaderBar = () => {
    const {href, alt} = navData?.logo
    return (
        <div className="w-full bg-(--primary) flex justify-center p-3 h-18">
            <div className="container block md:flex justify-between items-center">
                <div className="h-full w-full md:w-[20%] flex justify-center items-center">
                    <Image
                        className="dark:invert w-[40%] md:w-full object-contain cursor-pointer"
                        src={href}
                        alt={alt}
                        width={100}
                        height={100}
                    />
                </div>
                <div className="h-full w-full md:w-[55%] flex justify-between items-center mt-3 md:mt-0">
                    <UnorderedList obj={navData?.data} />
                </div>
                <div className="h-full w-full md:w-[20%] flex justify-end md:justify-between items-center mt-3 md:mt-0">
                    <Search />
                    <CartIcon />
                </div>
            </div>
        </div>
    );
};


export default Header