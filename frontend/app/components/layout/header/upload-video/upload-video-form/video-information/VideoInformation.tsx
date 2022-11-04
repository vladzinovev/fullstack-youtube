import Link from "next/link";
import { FC } from "react";
import styles from './VideoInformation.module.scss';

interface IVideoInformation{
    thumbnailPath?:string
    videoId:string
    fileName:string
}

const VideoInformation:FC<IVideoInformation>=({thumbnailPath,videoId,fileName})=>{
    return(
        <div className={styles.info}>
            {!thumbnailPath && <div className={styles.thumbnail}>Uploading video...</div>}
            <div className={styles.details} >
                <div>
                    <span>Video Link</span>
                    <span>
                        <Link href={`/v/${videoId}`}>
                            <a>https://localhost.com/v/{videoId}</a>
                        </Link>
                    </span>
                </div>
                <div>
                    <span>Filename</span>
                    <span>{fileName}</span>
                </div>
            </div>
        </div>

    )
}
export default VideoInformation;