import { IAuthData } from "@/services/auth.helper";
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from "react";



interface IContext extends IAuthData{
    setData:null| Dispatch<SetStateAction<IAuthData>>
}

export const AuthContext=createContext<IContext>({}as IContext)

const AuthProvider:FC<PropsWithChildren<unknown>>=({children})=>{
    
    const [data, setData]=useState<IAuthData>({
        user:null,
        accessToken:'',
    });

    //const data:IContext=
    
    return (
        <AuthContext.Provider value={{...data,setData}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;