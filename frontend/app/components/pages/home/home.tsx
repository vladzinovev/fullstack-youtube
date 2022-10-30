

import {FC} from "react";
import { useAuth } from "../../../hooks/UseAuth";
import Header from "../../layout/header/Header";
import Layout from "../../layout/Layout";
import RightSide from "../../layout/right-side/RightSide";
import Sidebar from "../../layout/sidebar/Sidebar";
import Line from "../../ui/Line";
import { IHome } from "./home.interface";
import Recommended from "./recommended/Recommended";
import WeeklyFeatured from "./weekly-featured/WeeklyFeatured";


const Home:FC<IHome>=({weeklyVideos,randomVideo, newVideos, topVideo, topChannels})=>{

    const {user}=useAuth();

    return (
        <Layout title="Youtube 2.0">
            <div id="wrapper_content">
					<div className="left_side">

						<WeeklyFeatured weeklyVideos={weeklyVideos} randomVideo={randomVideo}/>
						<Line/>
                        <Recommended newVideos={newVideos}/>
						
					</div>
					<RightSide topVideo={topVideo} topChannels={topChannels}/>
				</div>
        </Layout>
    )
}

export default Home;