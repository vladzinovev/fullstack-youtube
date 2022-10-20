import { FC } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import styles from './AuthForm.module.scss';

const AuthForm:FC=()=>{
    return (
        <div>
            <button>
                <FaUserCircle fill='#A4A4A4'/>
            </button>
        </div>
    )
}

export default AuthForm;