import Link from "next/link";
import Image from "next/image";
import { FC } from "react"
import { IUser } from "types/user.interface";
import { formatNumberToK } from "utils/formatNumberToK";
import cn from 'classnames';

const ChannelItem:FC<{item:IUser}>=({item})=>{
    return (
        <div className="channel">
            <div className="info_left">
                <Link href={`/c/${item._id}`} >
                    <a>
                        <Image src={item.avatarPath} alt={item.name} width={60} height={60}/>
                    </a>
                </Link>
                <div className="info">
                    <div className={cn('name',{verified:item.isVerified})}>{item.name}</div>
                    <div className="subs">{formatNumberToK(item.subscribersCount)} Subscribers</div>
                </div>
            </div>
            <Link href={`/c/${item._id}`} >
                <a href="#" className="mnu">
                    <img src="img/common/open-menu.svg" alt=""/>
                </a>
            </Link>
            
        </div>
    )
    
}
export default ChannelItem;