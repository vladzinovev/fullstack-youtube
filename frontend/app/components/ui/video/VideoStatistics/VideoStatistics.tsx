import dayjs from "dayjs";
import { FC } from "react"
import { formatNumberToK } from "utils/formatNumberToK";

import styles from '../VideoItem.module.scss';

interface IVideoStatistics {
    views: number
    likes?: number
    createdAt:string
}

const VideoStatistics: FC<IVideoStatistics>=({views, likes, createdAt})=>{
    return(
        <div className={styles.number_info}>
                <div className={styles.views}>VIEWS {formatNumberToK(views)}</div>

                {!!likes && <div className={styles.likes}>
                    LIKES{formatNumberToK(likes)}
                </div>}

                <div className={styles.date}>{dayjs(new Date(createdAt)).fromNow()}</div>
        </div>
    )
}
export default VideoStatistics;