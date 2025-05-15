import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// select
type CurrencyOption = {
    name: string;
    value: string;
};

type DropdownProps = {
    optionObj: CurrencyOption[];
    change: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string
};


const Dropdown = ({ optionObj, change, value }: DropdownProps) => {
    return (
        <select className="float-left cursor-pointer text-white p-2 rounded-xs text-xs outline-none" onChange={change}
            value={value}>
            {optionObj.map((val, i) => (
                <option key={i} value={val.value} className="text-black">
                    {val.name}
                </option>
            ))}
        </select>
    );
};

// link btn
type GrayLinkBtnProps = {
    linkUrl: string;
    name: string;
};

const GrayLinkBtn = ({ linkUrl, name }: GrayLinkBtnProps) => {
    return (
        <li className="float-left mr-4 cursor-pointer text-white p-2 rounded-xs text-xs">
            <Link href={linkUrl}>
                {name}
            </Link>
        </li>
    );
};

type shopBtnTYpe = {
    classes: string,
    name: string,
    arrow: boolean
}

const ShopNowBtn = ({classes, name, arrow}: shopBtnTYpe) => {
    return <button className={classes}>{name} {arrow === true?  <FontAwesomeIcon icon={faArrowRight} className="text-(--secondary) text-lg cursor-pointer ml-3 font-bold" />: ''}</button>
}
export { Dropdown, GrayLinkBtn, ShopNowBtn }
