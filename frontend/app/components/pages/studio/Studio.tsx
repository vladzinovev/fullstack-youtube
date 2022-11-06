import Layout from "@/components/layout/Layout"
import { FC } from "react"
import StudioItem from "./StudioItem";

const Studio:FC=()=>{
    return(
        <Layout title='Youtube 2.0 studio'>
            <div style={{backgroundColor:'#F0F1F7'}} className={'p-7'}>
                <StudioItem></StudioItem>
            </div>
        </Layout>
    )
}
export default Studio;