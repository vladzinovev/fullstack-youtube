import Button from "@/components/ui/Button/Button";
import { useAuth } from "@/hooks/UseAuth";
import { useOutSide } from "@/hooks/useOutSide";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import Field from "../../../ui/Field/Field";
import { IAuthFields } from "./auth-form.interface";
import { validEmail } from "./auth.constants";
import styles from './AuthForm.module.scss';
import {useMutation} from 'react-query';
import { AuthService } from "@/services/auth/auth.service";

const AuthForm:FC=()=>{

    const {ref,isShow,setIsShow}=useOutSide(false);

    const [type,setType]=useState<'login'|'register'>('login');

    const {register, formState:{errors},handleSubmit}=useForm<IAuthFields>({
        //чтобы срабатывала проверка при пустом поле
        mode: 'onChange'
    });
    
    const {setData}=useAuth();

    const {mutate:loginSync}=useMutation('login', (data:IAuthFields)=>AuthService.login(data.email, data.password),{
        onSuccess(data){
            if(setData) setData(data)
        }
    })

    //TODO: REGISTER USER MUTATION
    const {mutate:registerSync}=useMutation('register', (data:IAuthFields)=>AuthService.register(data.email, data.password),{
        onSuccess(data){
            if(setData) setData(data)
        }
    })

    const onSubmit:SubmitHandler<IAuthFields>=(data)=>{
        if(type==='login') loginSync(data);
        else if (type==='register') registerSync(data);
    }

    return (
        <div className={styles.wrapper} ref={ref}>
            <button className={styles.button} onClick={()=>setIsShow(!isShow)}>
                <FaUserCircle fill='#A4A4A4' style={{width:'30px', height:'30px'}}/>
            </button>
            {isShow && 
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
                    placeholder='Password' error={errors.password} type={'password'}/>
                    <div className={styles.login}>
                        <Button type='submit' onClick={()=>setType('login')}>Login</Button>
                    </div>
                    <button className={styles.register} onClick={()=>setType('register')}>Register</button>
                </form>
            }
            

        </div>
    )
}

export default AuthForm;


