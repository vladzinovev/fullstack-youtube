import { FC } from "react"
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import cn from 'classnames'
import styles from './TooglePublic.module.scss'

const TooglePublic:FC= ()=>{
    const [isEnabled, setIsEnabled] = useState(false)
    return(
        <Switch
            checked={isEnabled}
            onChange={setIsEnabled}
            className={cn(styles.switch,{
                'bg-blue-600':isEnabled,
                'bg-gray-200':!isEnabled
            })}
        >
            <span>Enable notifications</span>
            <span
                className={cn(styles.switch,{
                    'translate-x-6':isEnabled,
                    'translate-x-1':!isEnabled
                })}
            />
        </Switch>
    )
}
export default TooglePublic;