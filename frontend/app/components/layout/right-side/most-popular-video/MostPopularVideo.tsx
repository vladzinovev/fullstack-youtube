import VideoItem from "@/components/ui/video/VideoItem";
import { FC } from "react";
import { IVideo } from "types/video.interface";

const MostPopularVideo:FC<{video:IVideo}>=({video})=>{
    return (
        <div id="live">
            <div className="title_gray">
                <h2>top video</h2>
            </div>
            
            <VideoItem item={video} tag={'Hot'} isAvatar/>

        </div>
    )
}
export default MostPopularVideo;

