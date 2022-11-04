import { FC, useState } from "react";
import { Dialog } from '@headlessui/react'
import styles from './UploadVideo.module.scss';
import { BsPlusCircleFill } from "react-icons/bs";
import stylesIcons from '../icons/IconsRight.module.scss';
import UploadModal from "./UploadModal";
import { VideoService } from "@/services/VideoService";
import { useMutation } from "react-query";

const UploadVideo:FC=()=>{
    const [isOpen, setIsOpen] = useState(false)
    const [videoId, setVideoId] = useState('')

    const {mutate}=useMutation('create video',()=>VideoService.createVideo(),{
        onSuccess:({data})=> {setVideoId(data),setIsOpen(true)}
    })

    return(
        <>
            <button className={stylesIcons.button} onClick={()=>mutate()}>
                <BsPlusCircleFill fill='#cd3a42'/>
            </button>
            <UploadModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId}/>
        </>
    )
}
export default UploadVideo;