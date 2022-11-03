import { FC, forwardRef } from "react";
import { ITextArea } from "./text-area.interface";
import cn from 'classnames';
import styles from './TeaxtArea.module.scss';


// eslint-disable-next-line react/display-name
const TeaxtArea:FC=forwardRef<HTMLTextAreaElement,ITextArea>(
    ({error,type='text',style,...rest},ref)=>{
        return (
            <div className={styles['editor']} style={style}>
                <textarea ref={ref} {...rest}/>
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        )
    }
)

TeaxtArea.displayName='TextArea';

export default TeaxtArea;
