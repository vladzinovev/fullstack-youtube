import Layout from "@/components/layout/Layout"
import Loader from "@/components/ui/Loader";
import { VideoService } from "@/services/VideoService";
import { FC } from "react"
import { useMutation, useQuery } from "react-query";
import Recommended from "../home/recommended/Recommended";
import StudioItem from "./StudioItem";

const Studio:FC=()=>{
    const {data, isLoading, refetch}= useQuery(
        'get videos in studio', 
        ()=>VideoService.getVideosByCurrentUser(),
        {
            select:({data})=>data
        }
    )

    const {mutate}= useMutation(
        'remove video', 
        (videoId:string)=>VideoService.deleteVideo(videoId),
       {
        onSuccess(){
            refetch()
        }
       }
    )

    return(
        <Layout title='Youtube 2.0 studio'>
            <div style={{backgroundColor:'#F0F1F7'}} className={'p-7'}>
                <StudioItem>
                    {isLoading ? (
                        <Loader count={5}/>
                    ): data?.length ? (
                        <Recommended newVideos={data || []} removeHandler={mutate} isUpdateLink/>
                    ): (
                        <p>Videos not found</p>
                    )}
                    
                </StudioItem>
            </div>
        </Layout>
    )
}
export default Studio;