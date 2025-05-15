import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const OpenActionBtn = () => {
    return <button className="text-[#e79e14] font-sm cursor-pointer">Open</button>
}

const EditActionBtn = () => {
    return <button className="text-[green] font-sm cursor-pointer flex items-center"><FontAwesomeIcon
        icon={faPenToSquare}
        className="text-sm h-full cursor-pointer mr-2 font-bold text-[green] "
    />
        Edit</button>
}

const DeleteActionBtn = () => {
    return <button className="text-[red] font-sm cursor-pointer flex items-center"><FontAwesomeIcon
        icon={faTrash}
        className="text-sm h-full cursor-pointer mr-2 font-bold text-[red] "
    />
        Remove</button>
}

export { OpenActionBtn, EditActionBtn, DeleteActionBtn }