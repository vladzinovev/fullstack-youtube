import Loader from "@/components/ui/Loader";
import { useAuth } from "@/hooks/UseAuth";
import { CommentService } from "@/services/CommentService";
import { FC } from "react"
import AddCommentForm from "./AddCommentForm";
import CommentItem from "./CommentItem";
import {useQuery} from 'react-query'


import styles from './Commments.module.scss'

const Comments:FC<{videoId:string}>=({videoId})=>{
    const {user} = useAuth();

    const {refetch, data, isLoading}=useQuery(
        ['getcomments',videoId],
        ()=>CommentService.getCommentsByVideo(videoId),
        {
            select:({data})=>data
        }
    )
    return(
        <>
            <div>
                {user && <AddCommentForm videoId={videoId} refetch={refetch}/>}
            </div>
            {isLoading ? (
                <Loader count={4}/>
            ): data?.length ? (
                <>
                    <div className={styles.grid}>       
                        {data.map((comment)=><CommentItem key={comment._id} comment={comment}/>)}
                    </div>
                </>
                
            ) : (
                <p>Comments not found</p>
            )}
            <h2>{}</h2>
        </>
        
    )
}
export default Comments;