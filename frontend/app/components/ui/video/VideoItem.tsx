import { FC, useRef } from "react"
import { IVideo } from "types/video.interface"
import Image from 'next/image';
import { formatNumberToK } from "utils/formatNumberToK";
import dayjs from 'dayjs';
import VideoDuration from "./VideoDuration";
 
const VideoItem:FC<{item:IVideo}>=({item})=>{

    
    
    return (
        <div className='video_item'>
            <div className="thumbnail">
                <img src="img/main/1.jpg" alt=""/>
                <Image src={item.thumbnailPath} alt={item.name} width={163} height={91}/>
                {/* <time>{dayjs(new Date(item.createdAt)).format('LT')}</time> */}
                <VideoDuration videoPath={item.videoPath} />
                
            </div>
            <div className="author">{item.user?.name}</div>
            <div className="name">{item.name}</div>
            <div className="number_info">
                <div className="views">VIEWS {formatNumberToK(item.views)}</div>
                <div className="date">{item.createdAt}</div>
            </div>
        </div>
    )
}
export default VideoItem;