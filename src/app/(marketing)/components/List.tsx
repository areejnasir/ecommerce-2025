import Link from "next/link";

const UnorderedList = ({ obj }: any) => {
  return (
    <ul className="list-none p-0 m-0 flex justify-between w-full">
      {obj?.map((val: any) => (
        <li key={val?.id} className="text-black text-xs md:text-sm border-b-2 border-(--secondary) px-2 py-2 md:px-3 cursor-pointer font-bold">
          <Link href={val?.url}>{val?.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;
