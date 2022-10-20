import Head from "next/head";
import {FC, PropsWithChildren} from "react";
import { useAuth } from "../../hooks/UseAuth";
import cn from 'classnames';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";


const Layout:FC<PropsWithChildren<{title:string}>>=({children,title})=>{

    const {user}=useAuth();
    return (
        <>
            <Head>
                <title>{title}</title>
                <main id="youtube_main">
                    <Sidebar/>
                    {/* content-full срабатывает когда нет user */}
                    <section className={cn("content",{'content-full':!user})}> 
                    
                        <Header/>
                        <div className='content-wrapper'>
                            {children}
                        </div>
                    </section>
                </main>
            </Head>
        </>
        
    )
}

export default Layout;