import Link from "next/link";
import { FC } from "react";
import styles from './VideoInformation.module.scss';

const VideoInformation:FC=()=>{
    return(
        <div className={styles.info}>
            <div className={styles.thumbnail}>Uploading video...</div>
            <div className={styles.details} >
                <div>
                    <span>Video Link</span>
                    <span>
                        <Link href={'/'}>
                            <a>https://youtube.com/v/wefwe4fggwe</a>
                        </Link>
                    </span>
                </div>
                <div>
                    <span>Filename</span>
                    <span>Video-hot_top.mov</span>
                </div>
            </div>
        </div>

    )
}
export default VideoInformation;