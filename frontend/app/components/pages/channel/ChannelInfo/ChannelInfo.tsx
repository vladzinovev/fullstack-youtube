import { FC } from "react"
import { IUser } from "types/user.interface"
import Image from 'next/image'
import styles from './ChannelInfo.module.scss'
import cn from 'classnames';
import VideoStatistics from "@/components/ui/video/VideoStatistics/VideoStatistics";

const ChannelInfo:FC<{channel:IUser}>=({channel})=>{
    return(
        <div>
            <div className={styles.profile_info}>
                <Image src={channel.avatarPath} alt={channel.name} width={100} height={100} quality={90}/>
                <div className={cn(styles.name,{verified:channel.isVerified})}>{channel.name}</div>
                <div className={styles.location}>{channel.location}</div>
            </div>
            <article className={styles.article}>{channel.description}</article>
            {/* <VideoStatistics views={item.views} likes={isLarge ? item.likes : undefined} createdAt={item.createdAt}/> */}
        </div>
    )
}
export default ChannelInfo;