"use client"

import { OpenActionBtn } from "@/app/(admin)/component/CrudBtns";
import DateFormate from "@/app/(admin)/component/DateFormate";
import Pagination from "@/app/(admin)/component/Pagination";
import SearchBar from "@/app/(admin)/component/SearchBar";
import Limit from "@/app/(admin)/component/Limit";
import { SetStateAction, useEffect, useState } from "react";

const Tables = ({ tableData }: any) => {
    const [limitVal, setLimitVal] = useState(2);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchVal, setSearchVal] = useState("");
    const [paginatedData, setPaginatedData] = useState([]);

    const fullData = tableData?.data?.tableData || [];

    const handleLimitChange = (newLimit: number) => {
        setLimitVal(newLimit);
        setCurrentPage(0);
    };

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSearchVal(e.target.value);
        setCurrentPage(0);
    };

    // ✅ Filter outside useEffect so it's accessible everywhere
    const filteredData = fullData.filter((item: any) => {
        const val = searchVal.toLowerCase();
        return (
            item?.text1?.toLowerCase()?.includes(val) ||
            item?.text2?.toLowerCase()?.includes(val) ||
            item?.text3?.toLowerCase()?.includes(val) ||
            item?.text4?.toLowerCase()?.includes(val) ||
            item?.text5?.toLowerCase()?.includes(val) ||
            item?.text6?.toLowerCase()?.includes(val)
        );
    });

    useEffect(() => {
        const offset = currentPage * limitVal;
        const paged = filteredData.slice(offset, offset + limitVal);
        setPaginatedData(paged);
    }, [currentPage, limitVal, searchVal, fullData]); // filteredData is derived, no need to include

    const pageCount = Math.ceil(filteredData.length / limitVal);


    return (
        <div className="w-full h-full">
            <div className="w-full p-2 rounded-sm overflow-hidden flex justify-between">
                <Limit setLimitVal={handleLimitChange} />
                <SearchBar onChange={handleChange} />
            </div>

            <table className="table-auto w-full">
                <thead>
                    <tr>
                        {tableData?.data?.heading?.map((item: any) => (
                            <th key={item?.id} className="text-sm text-black border-b-2 border-t-2 border-gray-300">
                                {item?.heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item: any) => (
                        <tr className="font-bold text-(--tabletext)" key={item?.id}>
                            <td><DateFormate data={item?.text1} /></td>
                            <td>{item?.text6}</td>
                            <td>{item?.text5}</td>
                            <td>
                                <span className={`px-2 py-1 rounded-md size-fit opacity-75 font-bold ${item?.text4 === "Shipped"
                                    ? "bg-[#0080003d] text-[green]"
                                    : item?.text4 === "Cancelled"
                                        ? "bg-[#ff000030] text-[red]"
                                        : item?.text4 === "New"
                                            ? "bg-[#0000ff1f] text-[blue]"
                                            : "bg-[#ffa5002b] text-[orange]"
                                    }`}>
                                    {item?.text4}
                                </span>
                            </td>
                            <td>{item?.text3}</td>
                            <td>{item?.text2}</td>
                            <td><OpenActionBtn /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* ✅ Use filteredData safely here now */}
            {filteredData.length > limitVal && (
                <Pagination
                    limitVal={limitVal}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
};

export default Tables;
