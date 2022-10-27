import { IAuthData } from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react";



interface IContext extends IAuthData{
    setData:null| Dispatch<SetStateAction<IAuthData>>
}

export const defaultValueAuthState={
    user:null,
    accessToken:'',
}

export const AuthContext=createContext<IContext>({}as IContext)

const AuthProvider:FC<PropsWithChildren<unknown>>=({children})=>{
    
    const [data, setData]=useState<IAuthData>(defaultValueAuthState);

    const {pathname}=useRouter();

    useEffect(()=>{
        const accessToken=Cookies.get('accessToken');
        if(accessToken){
            const user=JSON.parse(localStorage.getItem('user')|| '');

            setData({
                user,
                accessToken
            });
        }
    },[pathname]);

    useEffect(()=>{
        const accessToken=Cookies.get('accessToken');
        if(!accessToken && !data.user){
            AuthService.Logout();
            setData(defaultValueAuthState);
        }
    },[pathname])
    
    return (
        <AuthContext.Provider value={{...data,setData}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;