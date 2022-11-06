import { FC } from "react";
import Image from 'next/image'
import styles from './ChannelInfoShort.module.scss'

const ChannelInfoShort :FC<{channel:IUser}>=({channel})=>{
    return(
        <div className={styles.profile_info}>
            <Image src={channel.avatarPath} alt={channel.name} width={100} height={100} quality={90}/>
            <div className={cn(styles.name,{verified:channel.isVerified})}>{channel.name}</div>
            <div className={styles.location}>{channel.location}</div>
        </div>
    )
}
export default ChannelInfoShort;