import { FC, forwardRef } from "react";
import { IInput } from "./Field.interface";
import cn from 'classnames';
import styles from './Field.module.scss';


// eslint-disable-next-line react/display-name
const Field:FC=forwardRef<HTMLInputElement,IInput>(
    ({error,type='text',style,...rest},ref)=>{
        return (
            <div className={styles.input} style={style}>
                <input ref={ref} type={type} {...rest}/>
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        )
    }
)

Field.displayName='field';

export default Field;
