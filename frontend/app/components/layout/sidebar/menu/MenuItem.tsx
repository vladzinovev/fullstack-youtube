import Link from "next/link"
import { FC } from "react"
import { IMenuItem } from "./menu.interface"

const MenuItem:FC<{item:IMenuItem}>=({item})=>{
    return(

        <li>
            <Link href={item.link}>
            <a>
                <img src={`http://localhost:3000/${item.image}`} alt={item.title}/>
                <b>{item.title}</b>
            </a>
            </Link>
            
        </li>
    )
}
export default MenuItem;