import { FC, useRef } from "react"
import { IVideo } from "types/video.interface"
import Image from 'next/image';
import { formatNumberToK } from "utils/formatNumberToK";
import dayjs from 'dayjs';
import VideoDuration from "./VideoDuration";
import styles from './VideoItem.module.scss';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from "next/link";
dayjs.extend(relativeTime);
 
const VideoItem:FC<{item:IVideo}>=({item})=>{

    
    
    return (
        <Link href={`/v/${item._id}`}>
            <a className={styles.video_item}>
                <div className={styles.thumbnail}>
                    <Image src={item.thumbnailPath} alt={item.name} width={185} height={103}/>
                    {/* <time>{dayjs(new Date(item.createdAt)).format('LT')}</time> */}
                    <VideoDuration videoPath={item.videoPath} />
                    
                </div>
                <div className={styles.author}>{item.user?.name}</div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.number_info}>
                    <div className={styles.views}>VIEWS {formatNumberToK(item.views)}</div>
                    <div className={styles.date}>{dayjs(new Date(item.createdAt)).fromNow()}</div>
                </div>
            </a>
        </Link>
        
    )
}
export default VideoItem;