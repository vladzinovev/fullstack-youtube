import Channel from '@/components/pages/channel/Channel';
import { IChannel } from '@/components/pages/channel/channel.interface';
import { IHome } from '@/components/pages/home/home.interface';
import { UserService } from '@/services/UserService';
import { VideoService } from '@/services/VideoService';
import { pathExistsSync } from 'fs-extra';
import { shuffle } from 'lodash';
import type { GetStaticPaths, GetStaticProps,NextPage } from 'next';
import { IUser } from 'types/user.interface';
import { IVideo } from 'types/video.interface';

const ChannelPage: NextPage<IHome> = (props) => {
  return <Channel channel={undefined} videos={[]} {...props}/>
}

// eslint-disable-next-line @next/next/no-typos
export const GetStaticPaths: GetStaticPaths=async()=>{
    try{
        const users=await UserService.getAll().then(({data})=>data)
        const paths = users.map((user)=>({
            params:{
                id:user._id
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
    const userId=String(params?.id)
    const {data :videos} = await VideoService.getVideosByUser(userId);
    const channel=await UserService.getUser(userId).then(({data})=>data || ({} as IUser));

    return{
      props:{
        channel,
        videos,
        randomVideo:shuffle(videos)[0]
      } as IChannel,
      revalidate:60
    }
  }catch(e){
    return{
      props:{
        channel:{} as IUser,
        videos:[],
        randomVideo:{} as IVideo,
      } as IChannel
    }
  }
}

export default ChannelPage;
