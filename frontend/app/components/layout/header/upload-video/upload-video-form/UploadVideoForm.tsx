import Button from "@/components/ui/Button/Button";
import Field from "@/components/ui/Field/Field";
import { FC } from "react";
import { SubmitHandler, useForm , Controller} from "react-hook-form";
import { IVideoDto } from "types/video.interface";
import FooterForm from "./footer-form/FooterForm";
import TooglePublic from "./toogle-public/TooglePublic";
import VideoInformation from "./video-information/VideoInformation";

const UploadVideoForm:FC=()=>{
    const {register, formState:{errors}, control, handleSubmit}=useForm<IVideoDto>({
        mode:'onChange'
    })
    
    const onSubmit:SubmitHandler<IVideoDto>=(data)=>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap'>
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
                    render={({field})=><TooglePublic clickHandler={() => { field.onChange(!field.value); } } isEnabled={!!field.value}/>}/>
            </div>
            <div className={'w-5/12 p-3'}>
                <VideoInformation/>
            </div>
            <FooterForm/>
        </form>
    )
}
export default UploadVideoForm;