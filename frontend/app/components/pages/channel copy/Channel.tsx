import Layout from "@/components/layout/Layout";
import VideoItem from "@/components/ui/video/VideoItem";
import { FC } from "react";
import ChannelInfo from "../channel/ChannelInfo/ChannelInfo";
import Recommended from "../home/recommended/Recommended";
import { IChannel } from "./channel.interface";

const Channel:FC<IChannel>=({channel, videos, randomVideo})=>{
    return ( 
        <Layout title={channel.name}>
            <div className={'flex flex-wrap justify-between p-9'}>
                <div className={'w-1/2 pr-2'}>
                    <ChannelInfo channel={channel}/>
                </div>
                <div className={'w-1/3 pl-2'}>
                    <VideoItem item={randomVideo}/>
                </div>
                
            </div>
            <Recommended newVideos={videos}/>
        </Layout>
    )
}
export default Channel;