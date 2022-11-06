import VideoStatistics from "@/components/ui/video/VideoStatistics/VideoStatistics";
import { channel } from "diagnostics_channel";
import { FC } from "react"
import { IUser } from "types/user.interface";
import { IVideo } from "types/video.interface";
import { formatNumberToK } from "utils/formatNumberToK";
import { BiLike } from "react-icons/bi";
import styles from './VideoDetail.module.scss'
import ChannelInfoShort from "@/components/ui/ChannelInfoShort/ChannelInfoShort";

const VideoDetail:FC<{video:IVideo, channel:IUser}>=({video,channel})=>{
    return(
        <div>
            <div>
                <div>
                    <h1>{video.name}</h1>
                    <VideoStatistics views={video.views} createdAt={video.createdAt} subscribers={channel.subscribersCount}/>
                </div>
                <div>
                    <button className={styles.likeButton}>
                        <BiLike className={styles.likeIcon}/>
                        <span>{formatNumberToK(video.likes)}</span>
                    </button>
                </div>
            </div>
            <article>
                {video.description}
            </article>
            <ChannelInfoShort channel={channel}/>
        </div>
    )
}
export default VideoDetail;