import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from "react";

interface IData{
    user:{
        _id:string,
        email:string
    } | null,
    accessToken:string,
    
}

interface IContext extends IData{
    setData:null| Dispatch<SetStateAction<IData>>
}

export const AuthContext=createContext<IContext>({}as IContext)

const AuthProvider:FC<PropsWithChildren<unknown>>=({children})=>{
    
    const [data, setData]=useState<IData>({
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