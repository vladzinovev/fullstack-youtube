import Image from "next/image";
import Link from "next/link";
import {FC} from "react";
import logoImg from '../../../../public/img/common/logo.png';

import {MdPermMedia, MdSupport} from 'react-icons/md';
import { useAuth } from "../../../hooks/UseAuth";
import { AuthService } from "@/services/auth/auth.service";
import { defaultValueAuthState } from "@/providers/AuthProvider";
import Line from "@/components/ui/Line";
import ProfileInfo from "./ProfileInfo";
import Menu from "./menu/Menu";

const Sidebar:FC=()=>{

    const {user,setData}=useAuth();

    return user ? (
        <section className="sidebar">
			<Link href="/">
				<a className="logo" rel="noreferrer">
					<Image src='http://localhost:3000/img/common/logo.png' alt="Youtube" width={169} height={55}/>
                </a>
			</Link>
			<ProfileInfo/>
			<Line/>
			<Menu/>

			{/* 	<div className="switch_wrapper">
					<label className="switch">
					  <input type="checkbox" defaultChecked/>
					  <span className="slider round"></span>
					</label>
					<p>Light On</p>
				</div> */}

				<button id="logout_btn" onClick={()=>{
					AuthService.Logout();
            		setData && setData(defaultValueAuthState);}}>Logout</button>

				<div className="copy">
					© 2022 Youtube, LLC
				</div>
			</section>
    ): null;
}

export default Sidebar;