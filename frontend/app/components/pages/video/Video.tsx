import Layout from "@/components/layout/Layout";
import VideoItem from "@/components/ui/video/VideoItem";
import { FC } from "react";
import ChannelInfo from "../channel/ChannelInfo/ChannelInfo";
import Recommended from "../home/recommended/Recommended";
import Comments from "./comments/Comments";
import VideoDetail from "./video-detail/VideoDetail";
import VideoPlayer from "./video-player/VideoPlayer";
import { IVideoPage } from "./video.interface";

const Video:FC<IVideoPage>=({video})=>{
    return ( 
        <Layout title={video.name}>
            <div>
                <VideoPlayer videoPath={video.videoPath}/>
            
                <div className={'wrapper_content'}>
                    <div className='left_side'><VideoDetail/></div>
                    <div className='right_side'><Comments/></div>
                </div>
            </div>
        </Layout>
    )
}
export default Video;