import Image from "next/image"
import { EditActionBtn } from "@/app/(admin)/component/CrudBtns"
import Link from "next/link"

const Carts = ({ data }: any) => {
    return <Link href={`/home-settings/${data?.slugName}`} >
        <div className="bg-white p-2 cursor-pointer rounded-sm border-2 border-gray-300" key={data?.id}>
            <div className="h-[150px] w-full bg-(--primary)">
                <Image src={data?.img_url} alt={data?.label} width={100} height={100} className="h-full object-contain m-auto" />
            </div>
            <p className="text-center mt-2 text-sm font-bold text-black flex items-center justify-between">
                {data?.label}
                <EditActionBtn />
            </p>
        </div>
    </Link>
}

export default Carts