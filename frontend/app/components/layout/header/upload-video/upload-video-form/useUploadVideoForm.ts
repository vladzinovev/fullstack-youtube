import { IMediaResponse } from "@/services/MediaService"
import { VideoService } from "@/services/VideoService"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { IVideoDto } from "types/video.interface"

interface IUseUploadVideoForm{
    handleCloseModal:()=>void
    videoId:string
}

export const useUploadVideoForm=({handleCloseModal,videoId}:IUseUploadVideoForm)=>{
    const {register, formState:{errors}, control, handleSubmit,watch,setValue,reset}=useForm<IVideoDto>({
        mode:'onChange'
    })
    const{mutateAsync, isSuccess} = useMutation('Update video' ,(body:IVideoDto)=>VideoService.updateVideo(videoId,body),{
        onSuccess(){
            setTimeout(()=>{
                handleCloseModal();
                reset();
            },1000)
            
        }
    })
    
    const onSubmit:SubmitHandler<IVideoDto>=async(data)=>{
        await mutateAsync(data);
    }
    const videoPath=watch('videoPath');
    const thumbnailPath=watch('thumbnailPath');
    const [videoFileName, setVideoFileName]=useState('');
    const handleUploadVideo=(value:IMediaResponse)=>{
        setValue('videoPath',value.url)
        setValue('name',value.name)
        setVideoFileName(value.name)
    }

    const [isChosen, setIsChosen]=useState(false);

    const [percent, setPercent]=useState(0);
    const [isUploaded, setIsUploaded]=useState(false);
    const setProgressPercentage= (val:number)=>{
        setPercent(val);
        if(val===100){
            setIsUploaded(true);
        }
    }
    return{
        form:{
            register,
            errors,
            control,
            handleSubmit,
            onSubmit
        },
        media:{
            videoPath,
            thumbnailPath,
            videoFileName,
            handleUploadVideo,
        },
        status:{
            isSuccess,
            isChosen,
            setIsChosen,
            percent,
            isUploaded,
            setProgressPercentage,
        }

        
        
        
    }
}



