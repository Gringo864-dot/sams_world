import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViweGridIcon,
} from "@heroicons/react/solid";

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon";


function Header() {
    return (
        <div className="flexbox">
            <div>
                <Image className="logo" 
                    src="/Images/sam_logo.jpg"
                    width={70}
                    height={70}
                    layout="fixed"
                />
            </div>
            <div className="flex">
                <SearchIcon className="search_icon" />
                <input className="input" text="text" placeholder="Search..." />
            </div>

            <div className="all_icons">
                <div>
                    <HeaderIcon Icon={HomeIcon} />
                </div>    
            </div>

        </div>

        
    )
}

export default Header
