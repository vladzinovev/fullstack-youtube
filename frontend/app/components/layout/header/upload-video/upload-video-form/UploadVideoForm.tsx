import Button from "@/components/ui/Button/Button";
import Field from "@/components/ui/Field/Field";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IVideoDto } from "types/video.interface";
import TooglePublic from "./toogle-public/TooglePublic";

const UploadVideoForm:FC=()=>{
    const {register, formState:{errors}, control, handleSubmit}=useForm<IVideoDto>({
        mode:'onChange'
    })
    
    const onSubmit:SubmitHandler<IVideoDto>=(data)=>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
        <TooglePublic/>
        <div className={'mt-5 mb-1 text-center'}>
            <Button>Save</Button>
        </div>
        </form>
    )
}
export default UploadVideoForm;