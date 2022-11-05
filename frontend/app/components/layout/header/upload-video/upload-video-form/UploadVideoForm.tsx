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
import { useMutation } from "react-query";
import { VideoService } from "@/services/VideoService";
import SuccessMessage from "./SuccessMessage";
import { useUploadVideoForm } from "./useUploadVideoForm";

const UploadVideoForm:FC<{videoId:string,handleCloseModal:()=>void}>=({videoId,handleCloseModal})=>{
    
    const {form,status,media}=useUploadVideoForm({videoId,handleCloseModal})

    return (
        <form onSubmit={form.handleSubmit(form.onSubmit)} className='flex flex-wrap'>
            { status.isSuccess && <SuccessMessage/>}
            {status.isChosen ? (
                <>
                    <div className={'w-7/12 pr-12'}>
                    <Field 
                        {...form.register('name',{
                                required:'Name is required',
                        })}
                        placeholder='Name' error={form.errors.name}
                    />
                    <TextArea 
                        {...form.register('description',{
                                required:'Description is required',
                        })}
                        placeholder='Description' error={form.errors.description} 
                    />
                    <div className="mt-8">
                        <Controller 
                            control={form.control} 
                            name='thumbnailPath' 
                            render={({field:{onChange}})=> <UploadField 
                                folder='thumbnails' 
                                onChange={(value:IMediaResponse)=>{onChange(value.url)}}
                            />}
                        />
                    </div>
                    
                    <Controller 
                        control={form.control} 
                        name='isPublic' 
                        render={({field})=><TooglePublic clickHandler={() => { field.onChange(!field.value); } } isEnabled={!!field.value}/>}
                    />
                    </div>
                    <div className={'w-5/12 p-3'}>
                        <VideoInformation videoId={videoId} fileName={media.videoFileName} isUploaded={status.isUploaded} thumbnailPath={media.thumbnailPath}/>
                    </div>
                    <FooterForm percent={status.percent} isUploaded={status.isUploaded}/>
                </> 
            ) : (
                <div className={styles.uploadScreen}>
                    <Controller 
                        control={form.control} 
                        name='videoPath' 
                        render={()=> <UploadField 
                            title={'Сначала, загрузите видео'} 
                            folder='videos' 
                            onChange={media.handleUploadVideo} 
                            setValue={status.setProgressPercentage} 
                            setIsChosen={status.setIsChosen}
                        />}
                    />
                </div>
            )
            }
            
        </form>
    )
}
export default UploadVideoForm;