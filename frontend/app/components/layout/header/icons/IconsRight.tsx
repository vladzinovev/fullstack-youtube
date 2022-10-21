import { FC } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../../../hooks/UseAuth";
import AuthForm from "../auth-form/AuthForm";
import styles from './IconsRight.module.scss';

const IconsRight:FC=()=>{
    const {user}=useAuth();
    return (
        <div className={styles.icons}>
            {!!user && (
            <button>
                <BsPlusCircleFill fill='#cd3a42'/>
            </button>)}

            {!user && <AuthForm/>}
        </div>
    )
}

export default IconsRight;