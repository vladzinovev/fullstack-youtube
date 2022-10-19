import {FC} from "react";
import Header from "../../layout/header/Header";
import RightSide from "../../layout/right-side/RightSide";
import Sidebar from "../../layout/sidebar/Sidebar";
import Line from "../../ui/Line";
import Recommended from "./recommended/Recommended";
import WeeklyFeatured from "./weekly-featured/WeeklyFeatured";


const Home:FC=()=>{
    return (
        <main id="youtube_main">
			<Sidebar/>
			<section className="content">
				<Header/>
				<div id="wrapper_content">
					<div className="left_side">

						<WeeklyFeatured/>
						<Line/>
                        <Recommended/>
						
					</div>
					<RightSide/>
				</div>
			</section>
		</main>
    )
}

export default Home;