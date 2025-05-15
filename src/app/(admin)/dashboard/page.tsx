"use client"

import LineChart from "@/app/(admin)/component/LineChart";
import Count from "@/app/(admin)/datas/dashboardTotals.json"
import Tables from "@/app/(admin)/component/Table";
import tableData from "@/app/(admin)/datas/dashboardTable.json"
import BarChart from "@/app/(admin)/component/BarChart";
import SideBar from "@/app/(admin)/partial/sidebar";
import NavIcon from "@/app/(admin)/component/NavIcon";
import { useState } from "react";
import "@/app/(marketing)/lib/fontawesome";
import { usePathname } from "next/navigation";

const Dashboard = () => {
  const [navOpen, setNavOpen] = useState(true);
  const pathName = usePathname();

  const handleClick = () => setNavOpen(!navOpen);
  return (
    <div className="w-full h-[100vh] flex justify-between">
      <SideBar navOpen={navOpen} onClick={handleClick}/>
      <div className={`${navOpen ? "container translate-x-0 lg:translate-x-[250px] md:translate-x-[250px] w-full lg:w-(--containerwidth) md:w-(--containerwidth) " : "w-full lg:w-full md:w-full md:translate-x-[0px] lg:translate-x-[0px]"} absolute top-19 transition duration-400 ease-in-out px-5`}>
        <NavIcon onClick={handleClick} navOpen={navOpen} params={pathName} />
        {/* children */} 
        <div className="w-full mt-2 p-2">
          <p className="bg-(--primary) text-black text-sm p-2 rounded-sm font-bold border-b-2 border-gray-300">Current Sales Breakdowns</p>
          {/* totals */}
          <div className="grid grid-flow-col grid-rows-1 gap-4 mt-2">
            {Count?.data?.map(({ id, count, label }: any) => {
              return <div className="rounded-sm bg-white py-3 px-2 text-center text-black cursor-pointer border-2 border-gray-300" key={id}>
                <h3 className="font-bold text-sm md:text-md">{count}</h3>
                <h6 className="text-sm md:text-md text-(--secondary3)">{label}</h6>
              </div>
            })}
          </div>
          {/* chart */}
          <div className="grid grid-flow-col lg:grid-rows-1 grid-rows-2 gap-4 mt-2">
            <div className="border-2 border-gray-300 rounded-sm h-[300px] chart-container bg-white">
              <LineChart />
            </div>
            <div className="border-2 border-gray-300 rounded-sm h-[300px] chart-container bg-white">
              <BarChart />
            </div>
          </div>
          {/* order table */}
          <div className="w-full rounded-sm mt-2">
            <p className="bg-(--primary) text-black text-sm p-2 rounded-sm font-bold border-b-2 border-gray-300">Latest Orders</p>
            <div className="w-full overflow-auto pb-5 bg-white mt-2 border-2 border-gray-300">
              <Tables tableData={tableData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
