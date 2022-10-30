import { IHome } from '@/components/pages/home/home.interface';
import { UserService } from '@/services/UserService';
import { VideoService } from '@/services/VideoService';
import { shuffle } from 'lodash';
import type { GetStaticProps,NextPage } from 'next';
import { IVideo } from 'types/video.interface';
import Home from '../app/components/pages/home/Home';

const HomePage: NextPage<IHome> = (props) => {
  return <Home {...props}/>
}

export const getStaticProps:GetStaticProps=async()=>{
  try{

    const {data :newVideos} = await VideoService.getAll();
    const topVideo=await VideoService.getMostPopular().then(({data})=>data[0] || ({} as IVideo));
    const topChannels=await UserService.getMostPopular().then(({data})=>data); 

    //weekly featured & new videos & random video
    //top-video
    //top-channels

    return{
      props:{
        newVideos,
        weeklyVideos:shuffle(newVideos).slice(0,5),
        randomVideo:shuffle(newVideos)[0] || ({} as IVideo),
        topVideo,
        topChannels
      },
      revalidate:60
    }
  }catch(e){
    return{
      props:{
        randomVideo:{},
        topVideo:{},
        topChannels:[],
        newVideos:[],
        weeklyVideos:[]
      }
    }
  }
}

export default HomePage;
