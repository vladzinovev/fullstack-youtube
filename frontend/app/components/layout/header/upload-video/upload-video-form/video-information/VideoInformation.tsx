import Link from "next/link";
import { FC } from "react";
import styles from './VideoInformation.module.scss';
import Image from "next/image";

interface IVideoInformation{
    thumbnailPath?:string
    videoId:string
    fileName:string
    isUploaded:boolean
}

const VideoInformation:FC<IVideoInformation>=({thumbnailPath,videoId,fileName,isUploaded})=>{
    return(
        <div className={styles.info}>
            {!thumbnailPath ? (
                <div className={styles.thumbnail}>{!isUploaded ? 'Uploading video...' : 'You should upload thumbnail'}</div>
            ): <Image src={thumbnailPath} width={344} height={200} alt ={''}/>}
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