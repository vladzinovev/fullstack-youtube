import { FC } from "react";
import Image from 'next/image'
import styles from './ChannelInfoShort.module.scss'
import { IUser } from "types/user.interface";

import cn from 'classnames';

const ChannelInfoShort :FC<{channel:IUser}>=({channel})=>{
    return(
        <div className={styles.profile_info}>
            <Image src={channel.avatarPath} alt={channel.name} width={50} height={50} quality={90}/>
            <div className={cn(styles.name,{verified:channel.isVerified})}>{channel.name}</div>
            <div className={styles.location}>{channel.location}</div>
        </div>
    )
}
export default ChannelInfoShort;