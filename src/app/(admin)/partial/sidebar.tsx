import "@/app/(marketing)/lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import navData from "@/app/(admin)/datas/sidebar.json"
import Link from "next/link"
import { usePathname } from "next/navigation";

const SideBar = ({ navOpen, onClick }: any) => {
  const pathName = usePathname();

  return <nav className={` h-[90vh] border-r-2 border-gray-300 bg-(--background) z-10 fixed top-18 transition duration-400 ease-in-out p-2 ${navOpen ? "w-[250px] translate-x-[-100%] lg:translate-x-[0] md:translate-x-[0]" : "w-full lg:w-[250px] md:w-[250px] translate-x-[0] lg:translate-x-[-100%] md:translate-x-[-100%]"}`}>
    <ul className="list-style-none p-0 m-0">
      <li className="flex lg:hidden md:hidden justify-end px-2 py-2"><FontAwesomeIcon
        icon={faXmark}
        onClick={onClick}
        style={{ color: "var(--secondary3)" }}
        className="text-lg h-5 cursor-pointer ml-3 font-bold"
      /></li>
      {navData?.data?.map((val: any) => (
        <li key={val?.id} className={`${pathName == val?.url ? "bg-(--primary)" : ""} text-black text-xs md:text-sm border-b-2 border-gray-300 px-2 py-2 md:px-3 cursor-pointer font-bold hover:bg-(--graybackground)`}>
          <Link href={val?.url}>{val?.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
}


export default SideBar