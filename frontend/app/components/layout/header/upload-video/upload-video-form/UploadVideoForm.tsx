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

const UploadVideoForm:FC=()=>{
    const {register, formState:{errors}, control, handleSubmit,watch,setValue}=useForm<IVideoDto>({
        mode:'onChange'
    })
    
    const onSubmit:SubmitHandler<IVideoDto>=(data)=>{
        console.log(data);
    }
    const videoPath=watch('videoPath');
    const [videoFileName, setVideoFileName]=useState('');
    const handleUploadVideo=(value:IMediaResponse)=>{
        setValue('videoPath',value.url)
        setValue('name',value.name)
        setVideoFileName(value.name)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap'>
            {!!videoPath ? (
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
                    <Controller 
                        control={control} 
                        name='isPublic' 
                        render={({field})=><TooglePublic clickHandler={() => { field.onChange(!field.value); } } isEnabled={!!field.value}/>}
                    />
                    </div>
                    <div className={'w-5/12 p-3'}>
                        <VideoInformation videoId={'wefwe4fggwe'} fileName={videoFileName}/>
                    </div>
                    <FooterForm/>
                </> 
            ) : (
                <div className={styles.uploadScreen}>
                    <Controller 
                        control={control} 
                        name='videoPath' 
                        render={()=><UploadField title={'Сначала, загрузите видео'}folder='videos' onChange={handleUploadVideo}/>}
                    />
                </div>
            )
            }
            
        </form>
    )
}
export default UploadVideoForm;