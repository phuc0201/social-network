import React from "react";
import MessageSender from "../messageSender/MessageSender";
import Storyreel from "../storyreel/Storyreel";
import Post from "../post/Post";
import "./feed.scss"
import { Posts } from "../../dummyData";
export default function Feed(){
    return(
        <div className="feed">
            <div className="feedContainer">
                <Storyreel/>
                <MessageSender/>
                {Posts.map((p) => <Post post={p}/>)}
            </div>
        </div>
    );
}