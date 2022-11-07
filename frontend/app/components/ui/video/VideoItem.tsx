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
import cn from 'classnames';
import VideoStatistics from "./VideoStatistics/VideoStatistics";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useRouter } from "next/router";
dayjs.extend(relativeTime);
 
const VideoItem:FC<IVideoItem>=({item,isLarge,isAvatar, tag, removeHandler,isUpdateLink})=>{
    const {push} = useRouter()
    return (
        
        <div className={styles.video_item}>
            {!!removeHandler && <button className={'absolute top-3 right-3'} onClick={()=> removeHandler(item._id)}> <BiTrash className='text-lg text-red-700'/></button>}
            {isUpdateLink && <button className={'absolute top-3 right-3'} onClick={()=> push(`/video/edit${item._id}`)}> <BiEdit className='text-lg text-blue-600'/></button>}
            <Link href={`/v/${item._id}`}>
                <a className={"block"}>
                    <div className={styles.thumbnail}>
                        {item.thumbnailPath && <Image src={item.thumbnailPath} alt={item.name} width={185} height={103} layout='responsive'/>}
                        {/* <time>{dayjs(new Date(item.createdAt)).format('LT')}</time> */}
                        <VideoDuration videoPath={item.videoPath} />
                        {tag && <div className={styles.hot}>{tag}</div>}
                        {isAvatar && (
                            <div className={styles.avatar}>
                                <Image width={50} height={50} alt={item.user?.name} src={item.user?.avatarPath || ''}/>
                            </div>
                        )}
                        
                    </div>
                    <div className={cn('author',{verified:item.user?.isVerified})}>{item.user?.name}</div>
                    <div className={styles.name}>{item.name}</div>
                </a>
            </Link>
            

            {isLarge && <div className={styles.description}>
                    VIEWS{formatNumberToK(item.views)}
                </div>}

            <VideoStatistics views={item.views} likes={isLarge ? item.likes : undefined} createdAt={item.createdAt}/>
        </div>
        
        
    )
}
export default VideoItem;