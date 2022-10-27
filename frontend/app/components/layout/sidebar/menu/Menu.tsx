import { FC, Fragment } from "react"
import { menu } from "./menu.data"
import MenuItem from "./MenuItem"

const Menu:FC=()=>{
    return (
        <ul className="mnu_sidebar">
            {menu.map((menuItem,index)=>(
                <Fragment key={menuItem.title} >
                    <MenuItem item={menuItem}/>
                    {index === 3 && <div className='line_mnu'/>}
                </Fragment>
            ))} 
            <div className='line_mnu'/>
        </ul>

    )
}
export default Menu;