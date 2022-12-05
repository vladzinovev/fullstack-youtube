import Layout from "@/components/layout/Layout";
import VideoItem from "@/components/ui/video/VideoItem";
import { VideoService } from "@/services/VideoService";
import { FC } from "react";
import { useMutation } from "react-query";
import { IUser } from "types/user.interface";
import ChannelInfo from "../channel/ChannelInfo/ChannelInfo";
import Recommended from "../home/recommended/Recommended";
import Comments from "./comments/Comments";
import VideoDetail from "./video-detail/VideoDetail";
import VideoPlayer from "./video-player/VideoPlayer";
import { IVideoPage } from "./video.interface";
import { useCallback, useEffect, useRef, useState } from "react";

const Video:FC<IVideoPage>=({video})=>{
    const {mutate}=useMutation('Update views', ()=>VideoService.updateViews(video._id))

    useEffect(()=>{
        mutate()
    },[mutate])
    
    return ( 
        <Layout title={video.name}>
            <div>
                <VideoPlayer videoPath={video.videoPath}/>
            
                <div className={'wrapper_content'}>
                    <div className='left_side'><VideoDetail video={video} channel={video.user || ({} as IUser)}/></div>
                    <div className='right_side'><Comments videoId={video._id}/></div>
                </div>
            </div>
        </Layout>
    )
}
export default Video;