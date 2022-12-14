import Button from "@/components/ui/Button/Button";
import { FC } from "react";
import { MdCheckCircle, MdUpload } from "react-icons/md";
import styles from './FooterForm.module.sass';
import cn from 'classnames';


const FooterForm:FC<{percent:number,isUploaded:boolean}>=({percent,isUploaded})=>{
    return(
        <div className={styles.footer}>
            <div className={cn({[styles['icons-uploaded']]:isUploaded})}>
                <MdUpload className={styles['upload-icon']}/>
                <MdCheckCircle className={styles['check-icon']}/>
                <span>
                    {isUploaded? 'Video is uploaded': `Uploading ${percent}%...`}
                </span>
            </div>
            <div>
                <Button>Save</Button>
            </div>
        </div>
    )
}
export default FooterForm;