import { FC } from "react"
import styles from './UploadField.module.scss';

const UploadField:FC=()=>{
    return(
        <div className={styles.file}>
            <label className="block">
                <span className="sr-only">Choose File</span>
                <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
            </label>
        </div>
    )
}

export default UploadField;