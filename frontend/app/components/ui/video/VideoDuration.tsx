import { FC, useEffect, useRef, useState } from "react"

const VideoDuration:FC<{videoPath:string}>=({videoPath})=>{
    const ref=useRef<HTMLVideoElement>(null);
    const duration = ref.current?.duration || 0;

    /*const [duration, setDuration]=useState(0);

    useEffect(()=>{
        const video=ref.current
        if(video) setDuration(video?.duration)
    },[ref.current?.duration]) */

    return (
        <>
            <video className="hidden" ref={ref}>
                <source src={videoPath} type='video/mp4'/>
            </video>
            {/* Выводим в мин:сек время ролика */}
            <time>{Math.floor(duration/60)+':'+('0' +Math.floor(duration % 60)).slice(-2)}</time>
        </>
        
    )
}
export default VideoDuration;