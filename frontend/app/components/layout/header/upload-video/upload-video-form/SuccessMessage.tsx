import { FC } from "react"

const SuccessMessage:FC = () =>{
    return (
        <div className="absolute top-5 left-1/4 text-lg p-2 z-10 flex ites-center justify-center shadow-block animate-scaleIn w-1/2 bg-green-500 text-white text-center mx-auto">
            Video uploaded successfully!
        </div>
    )
}

export default SuccessMessage;