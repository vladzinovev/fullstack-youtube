import { FC } from "react";
import {BsPlusCircleFill} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';
import IconsRight from "./icons/IconsRight";

const Header:FC=()=>{
    return (
        <header id="header">
            <Search/>
            <IconsRight/>
        </header>
    )
}
export default Header;
