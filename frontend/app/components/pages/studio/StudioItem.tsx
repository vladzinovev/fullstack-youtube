import { FC, PropsWithChildren } from "react"
import cn from 'classnames'
import styles from './Studio.module.scss'

const StudioItem:FC<PropsWithChildren<any>>=({children, className,})=>{
    return(
        <div className={cn(styles.item, className)}>{children}</div>
    )
}
export default StudioItem;