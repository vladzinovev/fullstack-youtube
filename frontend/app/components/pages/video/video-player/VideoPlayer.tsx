import { FC } from "react"
import { MdPause, MdPlayArrow } from "react-icons/md";
import { usePlayer } from "./usePlayer";
import styles from './VideoPlayer.module.scss'

const VideoPlayer:FC<{videoPath:string}>=({videoPath})=>{
    const {videoRef} = usePlayer();
    const isPlaying = false;
    return(
        <div className={styles.wrapper}>
            <video ref={videoRef} className={styles.player} src={`${videoPath}#t=8`} preload='matadata'/>
            <div className={styles.button}>
                <button onClick={()=>null}>
                    {isPlaying ? <MdPause/> : <MdPlayArrow/>}
                </button> 
            </div>
            <div className={styles.progressBarWrapper}>
                <div className={styles.progressBar} style={{ width:`${10}%`}}/>
            </div>
        </div>
    )
}
export default VideoPlayer;