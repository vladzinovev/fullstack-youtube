import VideoItem from "@/components/ui/video/VideoItem";
import { FC } from "react";
import { IVideo } from "types/video.interface";

const Recommended:FC<{newVideos:IVideo[]}>=({newVideos})=>{
    return (
        <div id="recommended">
            <div className="top_block">
                <div className="left_title title_gray">
                    <h2>Newest video</h2>
                </div>
                <div className="sort">By View Trending</div>
            </div>
            <div className="catalog">
            {newVideos.map((video)=>(
                <VideoItem item={video} key={video._id} isAvatar/>
            ))}
            </div>
        </div>
    )
}
export default Recommended;

