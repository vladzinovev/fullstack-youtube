import type { GetStaticProps,NextPage } from 'next';
import Home from '../app/components/pages/home/Home';

const HomePage: NextPage = () => {
  return <Home/>
}

export const getStaticProps:GetStaticProps=async()=>{
  try{

    const {data}

    //weekly featured & new videos & random video
    //top-video
    //top-channels

    return{
      props:{

      },
      revalidate:60
    }
  }catch(e){

  }
}

export default HomePage;
