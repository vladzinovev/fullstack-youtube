import Button from "@/components/ui/Button/Button";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import Field from "../../../ui/Field/Field";
import { IAuthFields } from "./auth-form.interface";
import { validEmail } from "./auth.constants";
import styles from './AuthForm.module.scss';

const AuthForm:FC=()=>{

    const [type,setType]=useState<'login'|'register'>('login');

    const {register, formState:{errors},handleSubmit}=useForm<IAuthFields>({
        //чтобы срабатывала проверка при пустом поле
        mode: 'onChange'
    });

    const onSubmit:SubmitHandler<IAuthFields>=(data)=>{
        if(type==='login') console.log('login',data.email)
        else if (type==='register') console.log('register',data.email)
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
                <Field 
                    {...register('password',{
                            required:'Password is required',
                            minLength:{
                                value:6,
                                message:'Please enter a valid password address',
                            },
                        })
                    }
                placeholder='Password' error={errors.password}/>
                <Button className={'mt-2 mx-auto inline-block'} type='submit' onClick={()=>setType('login')}>Login</Button>
                <button className={styles.register} onClick={()=>setType('register')}>Register</button>
                
            </form>

        </div>
    )
}

export default AuthForm;