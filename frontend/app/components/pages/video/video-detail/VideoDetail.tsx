import VideoStatistics from "@/components/ui/video/VideoStatistics/VideoStatistics";
import { channel } from "diagnostics_channel";
import { FC } from "react"
import { IUser } from "types/user.interface";
import { IVideo } from "types/video.interface";
import { formatNumberToK } from "utils/formatNumberToK";
import { BiLike } from "react-icons/bi";
import styles from './VideoDetail.module.scss'
import ChannelInfoShort from "@/components/ui/ChannelInfoShort/ChannelInfoShort";
import { useMutation } from "react-query";
import { CommentService } from "@/services/CommentService";
import { ICommentDto } from "types/comment.interface";
import { VideoService } from "@/services/VideoService";

const VideoDetail:FC<{video:IVideo, channel:IUser}>=({video,channel})=>{
    
    const {mutateAsync, data}=useMutation('set like', (data:ICommentDto)=>VideoService.updateLikes(video._id))

    return(
        <div className={styles.detail}>
            <div className={styles.flex}>
                <div className={styles.text}>
                    <h1>{video.name}</h1>
                    <VideoStatistics views={video.views} createdAt={video.createdAt} subscribers={channel.subscribersCount}/>
                </div>
                <div>
                    <button className={styles.likeButton}>
                        <BiLike className={styles.likeIcon} onClick={()=>mutateAsync}/>
                        <span>{formatNumberToK(data?.data.likes || video.likes)}</span>
                    </button>
                </div>
            </div>
            <article  className={styles.article}>
                {video.description}
            </article>
            <ChannelInfoShort channel={channel}/>
        </div>
    )
}
export default VideoDetail;