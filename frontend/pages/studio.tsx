import { IHome } from '@/components/pages/home/home.interface';
import Studio from '@/components/pages/studio/Studio';
import { UserService } from '@/services/UserService';
import { VideoService } from '@/services/VideoService';
import { shuffle } from 'lodash';
import type { GetStaticProps,NextPage } from 'next';
import { IVideo } from 'types/video.interface';

const StudioPage: NextPage= (props) => {
  return <Studio/>
}


export default StudioPage;
