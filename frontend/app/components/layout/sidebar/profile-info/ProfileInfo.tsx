import avatarImg from '../../../../../public/img/main/avatar.jpg';

const ProfileInfo=()=>{
    return(
        <>
        `<div className="profile_info">
            <img src={avatarImg.src} alt="" width={70} height={70}/>
            <div className="name">Nannie Nelson</div>
            <div className="location">Montreal, QC</div>
        </div>
        <div className="information">
            <div className="item">
                <div className="top">278</div>
                <div className="bottom">videos</div>
            </div>
            <div className="item">
                <div className="top">36.5k</div>
                <div className="bottom">subscribers</div>
            </div>
        </div>`
        </>
        
    )
}


export default ProfileInfo;