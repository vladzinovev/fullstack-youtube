import Button from "@/components/ui/Button/Button";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import Field from "../../../ui/Field/Field";
import { IAuthFields } from "./auth-form.interface";
import { validEmail } from "./auth.constants";
import styles from './AuthForm.module.scss';

const AuthForm:FC=()=>{

    const {register, formState:{errors},handleSubmit}=useForm<IAuthFields>({
        //чтобы срабатывала проверка при пустом поле
        mode: 'onChange'
    });

    const onSubmit:SubmitHandler<IAuthFields>=(data)=>{
        alert(data.email)
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.button}>
                <FaUserCircle fill='#A4A4A4'/>
            </button>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Field 
                    {...register('email',{
                            required:'Email is required',
                            pattern:{
                                value:validEmail,
                                message:'Please enter a valid email address',
                            },
                        })
                    }
                placeholder='Email' error={errors.email}/>
                <Button>Login</Button>
                <button className={'text-sm'}>Register</button>
                
            </form>

        </div>
    )
}

export default AuthForm;