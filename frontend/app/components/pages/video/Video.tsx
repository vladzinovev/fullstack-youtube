import Layout from "@/components/layout/Layout";
import VideoItem from "@/components/ui/video/VideoItem";
import { FC } from "react";
import ChannelInfo from "../channel/ChannelInfo/ChannelInfo";
import Recommended from "../home/recommended/Recommended";
import { IVideoPage } from "./video.interface";

const Video:FC<IVideoPage>=({video})=>{
    return ( 
        <Layout title={video.name}>
            <div>
                
            
                <div className={'wrapper_content'}>
                    <div className='left_side'>VideoInfo</div>
                    <div className='right_side'>Comments</div>
                </div>
            </div>
        </Layout>
    )
}
export default Video;