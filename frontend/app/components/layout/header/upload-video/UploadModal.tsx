import { Dialog } from "@headlessui/react";
import { FC} from "react";
import { IUploadModal } from "./upload-video.interface";
import styles from './UploadVideo.module.scss';



const UploadModal:FC<IUploadModal>=({setIsOpen, isOpen})=>{
    return(
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.modal}>
            <div className={styles.overlay} aria-hidden="true"/>

            <div className={styles.wrapper}>
                <div className="">
                    <Dialog.Panel className={styles.window}>
                    <Dialog.Title>Complete your order</Dialog.Title>

                    {/* ... */}
                    </Dialog.Panel>
                </div>
            </div>
        
        </Dialog>
    )
}
export default UploadModal