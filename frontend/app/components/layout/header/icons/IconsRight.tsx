import { FC } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import AuthForm from "../auth-form/AuthForm";
import styles from './IconsRight.module.scss';

const IconsRight:FC=()=>{
    return (
        <div className={styles.icons}>
            <button>
                <BsPlusCircleFill fill='#cd3a42'/>
            </button>
            <AuthForm/>
        </div>
    )
}

export default IconsRight;