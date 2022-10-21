import { FC, forwardRef } from "react";
import { IInput } from "./input.interface";
import cn from 'classnames';
import styles from './Input.module.scss';


// eslint-disable-next-line react/display-name
const Input:FC=forwardRef<HTMLInputElement,IInput>(
    ({error,type='text',style,...rest},ref)=>{
        return (
            <div className={styles.input} style={style}>
                <input ref={ref} type={type} {...rest}/>
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        )
    }
)

Input.displayName='input';

export default Input;
