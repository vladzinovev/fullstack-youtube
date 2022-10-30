import { FC, useRef } from "react"
import { IVideo } from "types/video.interface"
import Image from 'next/image';
import { formatNumberToK } from "utils/formatNumberToK";
import dayjs from 'dayjs';
import VideoDuration from "./VideoDuration";
import styles from './VideoItem.module.scss';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from "next/link";
import { IVideoItem } from "./video-item.interface";
dayjs.extend(relativeTime);
 
const VideoItem:FC<IVideoItem>=({item,isLarge,isAvatar})=>{

    
    
    return (
        
        <div className={styles.video_item}>
            <Link href={`/v/${item._id}`}>
                <a className={"block"}>
                    <div className={styles.thumbnail}>
                        <Image src={item.thumbnailPath} alt={item.name} width={185} height={103} layout='responsive'/>
                        {/* <time>{dayjs(new Date(item.createdAt)).format('LT')}</time> */}
                        <VideoDuration videoPath={item.videoPath} />
                        {isAvatar && (
                            <div className={styles.avatar}>
                                <Image width={50} height={50} alt={item.user?.name} src={item.user?.avatarPath || ''}/>
                            </div>
                        )}
                        
                    </div>
                    <div className={styles.author}>{item.user?.name}</div>
                    <div className={styles.name}>{item.name}</div>
                </a>
            </Link>
            

            {isLarge && <div className={styles.description}>
                    VIEWS{formatNumberToK(item.views)}
                </div>}

            <div className={styles.number_info}>
                <div className={styles.views}>VIEWS {formatNumberToK(item.views)}</div>

                {isLarge && <div className={styles.likes}>
                    LIKES{formatNumberToK(item.likes)}
                </div>}

                <div className={styles.date}>{dayjs(new Date(item.createdAt)).fromNow()}</div>
            </div>
        </div>
        
        
    )
}
export default VideoItem;