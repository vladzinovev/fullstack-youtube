import { FC } from "react";
import Line from "../../ui/Line";

const RightSide:FC=()=>{
    return (
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
            <Line/>
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
    )
}
export default RightSide;

