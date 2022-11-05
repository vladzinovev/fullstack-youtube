import Button from "@/components/ui/Button/Button";
import Field from "@/components/ui/Field/Field";
import UploadField from "@/components/ui/UploadField/UploadField";
import { FC, useState } from "react";
import { SubmitHandler, useForm , Controller} from "react-hook-form";
import { IVideoDto } from "types/video.interface";
import FooterForm from "./footer-form/FooterForm";
import TooglePublic from "./toogle-public/TooglePublic";
import VideoInformation from "./video-information/VideoInformation";
import styles from '../UploadVideo.module.scss';
import { IMediaResponse } from "@/services/MediaService";

const UploadVideoForm:FC<{videoId:string}>=({videoId})=>{
    const {register, formState:{errors}, control, handleSubmit,watch,setValue}=useForm<IVideoDto>({
        mode:'onChange'
    })
    
    const onSubmit:SubmitHandler<IVideoDto>=(data)=>{
        console.log(data);
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

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap'>
            {isChosen ? (
                <>
                    <div className={'w-7/12 pr-12'}>
                    <Field 
                        {...register('name',{
                                required:'Name is required',
                        })}
                        placeholder='Name' error={errors.name}
                    />
                    <TextArea 
                        {...register('description',{
                                required:'Description is required',
                        })}
                        placeholder='Description' error={errors.description} 
                    />
                    <div className="mt-8">
                        <Controller 
                            control={control} 
                            name='thumbnailPath' 
                            render={({field:{onChange}})=> <UploadField 
                                folder='thumbnails' 
                                onChange={(value:IMediaResponse)=>{onChange(value.url)}}
                            />}
                        />
                    </div>
                    
                    <Controller 
                        control={control} 
                        name='isPublic' 
                        render={({field})=><TooglePublic clickHandler={() => { field.onChange(!field.value); } } isEnabled={!!field.value}/>}
                    />
                    </div>
                    <div className={'w-5/12 p-3'}>
                        <VideoInformation videoId={videoId} fileName={videoFileName} isUploaded={isUploaded} thumbnailPath={thumbnailPath}/>
                    </div>
                    <FooterForm percent={percent} isUploaded={isUploaded}/>
                </> 
            ) : (
                <div className={styles.uploadScreen}>
                    <Controller 
                        control={control} 
                        name='videoPath' 
                        render={()=> <UploadField 
                            title={'Сначала, загрузите видео'} 
                            folder='videos' 
                            onChange={handleUploadVideo} 
                            setValue={setProgressPercentage} 
                            setIsChosen={setIsChosen}
                        />}
                    />
                </div>
            )
            }
            
        </form>
    )
}
export default UploadVideoForm;