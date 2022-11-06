import { useRef } from "react";

export const usePlayer=()=>{
    const videoRef=useRef<IVideoElement>(null);
    return{videoRef}
}