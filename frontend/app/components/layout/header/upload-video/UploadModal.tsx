
import { FC, Fragment} from "react";
import UploadVideoForm from "./upload-video-form/UploadVideoForm";
import { IUploadModal } from "./upload-video.interface";
import styles from './UploadVideo.module.sass';

import { Dialog, Transition } from '@headlessui/react'



const UploadModal:FC<IUploadModal>=({setIsOpen, isOpen,videoId})=>{
    const handleCloseModal=()=>setIsOpen(false)
    return(
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={handleCloseModal} className={styles.modal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={styles.overlay} aria-hidden="true"/>
                </Transition.Child>
                

                <div className={styles.wrapper}>
                    <div>
                        <Transition.Child 
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >   
                            <Dialog.Panel className={styles.window}>
                                <UploadVideoForm videoId={videoId} handleCloseModal={handleCloseModal}/>
                            </Dialog.Panel>
                        </Transition.Child>
                        
                    </div>
                </div>
            
            </Dialog>
        </Transition>
    )
}
export default UploadModal