
import { FC} from "react";
import UploadVideoForm from "./upload-video-form/UploadVideoForm";
import { IUploadModal } from "./upload-video.interface";
import styles from './UploadVideo.module.scss';

import { Dialog, Transition } from '@headlessui/react'



const UploadModal:FC<IUploadModal>=({setIsOpen, isOpen})=>{
    return(
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            as={Fragment}
        >
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.modal}>
                <div className={styles.overlay} aria-hidden="true"/>

                <div className={styles.wrapper}>
                    <div className="">
                        <Dialog.Panel className={styles.window}>
                            <UploadVideoForm/>
                        </Dialog.Panel>
                    </div>
                </div>
            
            </Dialog>
        </Transition>
    )
}
export default UploadModal