import {FC} from "react";
import Header from "../../layout/header/Header";
import Sidebar from "../../layout/sidebar/Sidebar";


const Home:FC=()=>{
    return (
        <main id="youtube_main">
			<Sidebar/>
			<section className="content">
				<Header/>
				<div id="wrapper_content">
					<div className="left_side">
						<div className="weekly_featured">
							<div className="info_wf">
								<div className="sub_name">Weekly Featured</div>
								<h1>Hello, Summer Vacation!</h1>
								<div className="descr">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam harum placeat ullam vel non, quisquam totam, doloremque expedita odit consectetur minima vitae. Facilis nostrum cumque illum fugit rem, nam consectetur!
								</div>
								<div className="slider_wf">
									<div className="video_item">
										<div className="thumbnail">
											<img src="img/main/1.jpg" alt=""/>
											<time>16:55</time>
										</div>
										<div className="author">Micheal Adams</div>
										<div className="name">Day in my life: Summer ...</div>
										<div className="number_info">
											<div className="views">VIEWS 28.6K</div>
											<div className="date">6DS AGO</div>
										</div>
									</div>
									<div className="video_item">
										<div className="thumbnail">
											<img src="img/main/2.jpg" alt=""/>
											<time>07:23</time>
										</div>
										<div className="author">Dollie Cross</div>
										<div className="name">Day in my life: Summer ...</div>
										<div className="number_info">
											<div className="views">VIEWS 26.7K</div>
											<div className="date">10DS AGO</div>
										</div>
									</div>
									<div className="video_item">
										<div className="thumbnail">
											<img src="img/main/3.jpg" alt=""/>
											<time>16:55</time>
										</div>
										<div className="author">Micheal Adams</div>
										<div className="name">Day in my life: Summer ...</div>
										<div className="number_info">
											<div className="views">VIEWS 28.6K</div>
											<div className="date">6DS AGO</div>
										</div>
									</div>
								</div>
							</div>
							<div className="top_video">
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/3.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="descr">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus animi aut vel alias voluptate, odio. Tempora sequi et itaque enim a, aut excepturi adipisci quam, aspernatur, eaque obcaecati dolor tenetur :)
									</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="likes">LIKES 1.6K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
							</div>
						</div>
						<div className="line"></div>
						<div id="recommended">
							<div className="top_block">
								<div className="left_title title_gray">
									<h2>Recommended</h2>
									<div className="showmore">Show More</div>
								</div>
								<div className="sort">By View Trending</div>
							</div>
							<div className="catalog">
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/4.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/5.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/6.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/13.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/8.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/9.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/2.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/11.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
								<div className="video_item video_big_item">
									<img src="img/main/12.jpg" alt="" className="img-responsive"/>
								</div>
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/13.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
								<div className="video_item">
									<div className="thumbnail">
										<img src="img/main/14.jpg" alt=""/>
										<time>28:32</time>
										<div className="avatar">
											<img src="img/main/avatar.jpg" alt=""/>
										</div>
									</div>
									<div className="author">Warren Munoz</div>
									<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
									<div className="number_info">
										<div className="views">VIEWS 29.2K</div>
										<div className="date">3DS AGO</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="right_side">
						<div id="live">
							<div className="title_gray">
								<h2>Live</h2>
								<div className="showmore">Show More</div>
							</div>
							<div className="video_item video_live_item">
								<div className="thumbnail">
									<img src="img/main/live.jpg" alt=""/>
									<div className="live">Live</div>
									<div className="avatar">
										<img src="img/main/avatar.jpg" alt=""/>
									</div>
								</div>
								<div className="author">Warren Munoz</div>
								<div className="name">Lake House Vacation! Boating, Tubing & More!</div>
								<div className="descr">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsa voluptate, natus. Iure vitae dolores suscipit, commodi debitis aut culpa sapiente architecto exercitationem. Ullam laudantium ea hic inventore. Rem, alias.
								</div>
								<div className="number_info">
									<div className="views">VIEWS 29.2K</div>
									<div className="comments">COMMENTS 5.8K</div>
								</div>
							</div>
						</div>
						<div className="line"></div>
						<div id="top_channels">							
							<div className="title_gray">
								<h2>Top Channels</h2>
								<div className="showmore">Show More</div>
							</div>
							<div className="list_channels">
								<div className="channel">
									<div className="info_left">
										<img src="img/main/avatar.jpg" alt=""/>
										<div className="info">
											<div className="name">LEGO</div>
											<div className="subs">6.2M Subscribers</div>
										</div>
									</div>
									<a href="#" className="mnu"><img src="img/common/open-menu.svg" alt=""/></a>
								</div>
								<div className="channel">
									<div className="info_left">
										<img src="img/main/avatar.jpg" alt=""/>
										<div className="info">
											<div className="name">LEGO</div>
											<div className="subs">6.2M Subscribers</div>
										</div>
									</div>
									<a href="#" className="mnu"><img src="img/common/open-menu.svg" alt=""/></a>
								</div>
								<div className="channel">
									<div className="info_left">
										<img src="img/main/avatar.jpg" alt=""/>
										<div className="info">
											<div className="name">LEGO</div>
											<div className="subs">6.2M Subscribers</div>
										</div>
									</div>
									<a href="#" className="mnu"><img src="img/common/open-menu.svg" alt=""/></a>
								</div>
								<div className="channel">
									<div className="info_left">
										<img src="img/main/avatar.jpg" alt=""/>
										<div className="info">
											<div className="name">LEGO</div>
											<div className="subs">6.2M Subscribers</div>
										</div>
									</div>
									<a href="#" className="mnu"><img src="img/common/open-menu.svg" alt=""/></a>
								</div>
								<div className="channel">
									<div className="info_left">
										<img src="img/main/avatar.jpg" alt=""/>
										<div className="info">
											<div className="name">LEGO</div>
											<div className="subs">6.2M Subscribers</div>
										</div>
									</div>
									<a href="#" className="mnu"><img src="img/common/open-menu.svg" alt=""/></a>
								</div>
								<div className="channel">
									<div className="info_left">
										<img src="img/main/avatar.jpg" alt=""/>
										<div className="info">
											<div className="name">LEGO</div>
											<div className="subs">6.2M Subscribers</div>
										</div>
									</div>
									<a href="#" className="mnu"><img src="img/common/open-menu.svg" alt=""/></a>
								</div>
							</div>
						</div>
						<div id="youtube_music">
							<img src="img/main/youtube_music.png" alt="" className="img-responsive"/>
							<a href="#" className="title">Youtube Music</a>
						</div>
					</div>
				</div>
			</section>
		</main>
    )
}

export default Home;