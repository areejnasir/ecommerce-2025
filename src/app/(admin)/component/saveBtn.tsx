const SaveBtn = ({type}: any) => {

    console.log(type, "type");
    
    return <button type={type} className="cursor-pointer text-white p-3 w-[200px] rounded-xs text-md font-bold bg-black mt-3">Save</button>
}

export default SaveBtn
