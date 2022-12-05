import { FC } from "react"
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import cn from 'classnames'
import styles from './TooglePublic.module.sass'
import { ITogglePublic } from "./toogle-public.interface"

const TooglePublic:FC<ITogglePublic>= ({isEnabled,clickHandler})=>{

    return(
        <div className={styles.wrapper}>
            <Switch
                checked={isEnabled}
                onChange={clickHandler}
                className={cn(styles.switch,{
                    'bg-primary bg-opacity-80':isEnabled,
                    'bg-gray-200':!isEnabled
                })}
            >
                
                <span
                    className={cn(styles.switch,{
                        'translate-x-6':isEnabled,
                        'translate-x-1':!isEnabled
                    })}
                />
            </Switch>
            <span onClick={()=>clickHandler}>Public video</span>
        </div>
        
    )
}
export default TooglePublic;