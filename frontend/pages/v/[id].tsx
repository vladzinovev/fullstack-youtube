
import { IChannel, IVideoPage } from '@/components/pages/video/video.interface';
import { IHome } from '@/components/pages/home/home.interface';
import { UserService } from '@/services/UserService';
import { VideoService } from '@/services/VideoService';
import { pathExistsSync } from 'fs-extra';
import { shuffle } from 'lodash';
import type { GetStaticPaths, GetStaticProps,NextPage } from 'next';
import { IUser } from 'types/user.interface';
import { IVideo } from 'types/video.interface';
import Video from '@/components/pages/video/Video';

const VideoPage: NextPage<IVideoPage> = (props) => {
  return <Video {...props}/>
}

// eslint-disable-next-line @next/next/no-typos
export const GetStaticPaths: GetStaticPaths=async()=>{
    try{
        const videos=await VideoService.getAll().then(({data})=>data)
        const paths = videos.map((video)=>({
            params:{
                id:video._id
            }
        }))
        return{
            paths, 
            fallback:'blocking'
        }
        
    }catch{
        return{
            paths:[],
            fallback:false
        }
    }
}

export const getStaticProps:GetStaticProps=async({params})=>{
  try{
    const videoId=String(params?.id)
    const {data :video} = await VideoService.getVideoById(videoId);

    return{
      props:{
        video
      } as IVideoPage,
      revalidate:60
    }
  }catch(e){
    return{
      props:{
        video:{} as IVideo
      } as IVideoPage
    }
  }
}

export default VideoPage;
