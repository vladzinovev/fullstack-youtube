import { FC, useState } from "react";
import { Dialog } from '@headlessui/react'
import styles from './UploadVideo.module.scss';
import { BsPlusCircleFill } from "react-icons/bs";
import stylesIcons from '../icons/IconsRight.module.scss';
import UploadModal from "./UploadModal";

const UploadVideo:FC=()=>{
    let [isOpen, setIsOpen] = useState(true)

    return(
        <>
            <button className={stylesIcons.button} onClick={()=>setIsOpen(true)}>
                <BsPlusCircleFill fill='#cd3a42'/>
            </button>
            <UploadModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}
export default UploadVideo;