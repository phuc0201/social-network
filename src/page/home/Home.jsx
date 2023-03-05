import React from "react"; 
import './home.scss';
import '../../../src/base.scss';
import Feed from "../../components/feed/Feed";
import Widgets from "../../components/widgets/Widgets";
import Sidebar from "../../components/sidebar/Sidebar";
export default function Home(){
    return(
        <div className="home__container">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    )
}