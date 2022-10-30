import VideoItem from "@/components/ui/video/VideoItem";
import { FC } from "react"
import styles from './Search.module.scss';
import { useSearch } from "./useSearch";

const Search:FC=()=>{
    const {data, handleSearch, searchTerm, isSuccess}= useSearch();
    return(
        <div className={styles.search_top}>
            <label>
                <input type="text" placeholder="Search videos..." value={searchTerm} onChange={handleSearch}/>
                <img src="img/common/search.svg" alt=""/>
            </label>
            {isSuccess && 
                <div className="styles.result">
                    {data?.length ? 
                    data.map(video=> <VideoItem item={video} key={video._id}/>):
                    (<div>Videos not found!</div>)}
                </div>
            }
        </div>
    )
}
export default Search;