import Loader from '@/components/ui/Loader';
import { UserService } from '@/services/UserService';
import { useQuery } from 'react-query';
import { formatNumberToK } from 'utils/formatNumberToK';
import avatarImg from '../../../../../public/img/main/avatar.jpg';
import Image from 'next/image';

const ProfileInfo=()=>{
    const {data,isLoading} = useQuery(
        'get profile',
        ()=>UserService.getProfile(),
        {select: ({data})=>data}
    )
    
    return isLoading ? (
    <Loader count={5}/>
    ):(
        <>
        `<div className="profile_info">
            {/* <img src={avatarImg.src} alt="" width={70} height={70}/> */}
            <Image src={data?.avatarPath || ''} alt="" width={120} height={120} quality={90}/>
            {/* <div className="name">Nannie Nelson</div> */}
            <div className="name">{data?.name}</div>
            {/* <div className="location">Montreal, QC</div> */}
            <div className="location">{data?.location}</div>
        </div>
        <div className="information">
            <div className="item">
                {/* <div className="top">278</div> */}
                <div className="top">{data?.videosCount}</div>
                <div className="bottom">videos</div>
            </div>
            <div className="item">
                {/* <div className="top">36.5k</div> */}
                <div className="top">{formatNumberToK(data?.subscribersCount || 0)}</div>
                <div className="bottom">subscribers</div>
            </div>
        </div>`
        </>
        
    )
}


export default ProfileInfo;