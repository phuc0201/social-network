import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { Users } from '../../dummyData'
import "./post.scss"

function Post({post}) {
  return (
    <div className='post'>
        <div className="post__top">
            <a href="#" className="postProfileImage avatar" style={{
                backgroundImage: `url(${Users.filter((u) => u.id == post.userId)[0].profilePicture})`
            }}></a>
            <div className='post__info'>
                <a href="#" className="postUsername">{Users.filter((u) => u.id == post.userId)[0].username}</a>
                <span className='postDate'>{post.date}</span>
            </div>
        </div>
        <div className="post__center">
            <span className='postText'>{post.desc}</span>
            <a href="#" className="postImage" style={{
                backgroundImage: `url(${post.photo})`
            }}></a>
            <div className="aggregatedData">
                <div className='aggregatedData__left'>
                    <div className='feelingIcon' style={{
                        backgroundImage: `url("https://cdn-icons-png.flaticon.com/512/9790/9790408.png")`
                    }}></div>
                    <div className="aggregatedData_feelingIcon">{post.like}</div>
                </div>
                <div className='aggregatedData__right'>
                    <div className="aggregatedData_comment">{post.comment} bình luận</div>
                    <div className="aggregatedData_share">12 lượt chia sẻ</div>
                </div>
            </div>
        </div>
        <div className="post__bottom">
            <div className='post__dialog'>
                <AiOutlineLike className='post--feelingIcon'/>
                <span>Like</span>
            </div>
            <div className='post__dialog'>
                <FaRegCommentAlt className='post--comment'/>
                <span>Comment</span>
            </div>
            <div className='post__dialog'>
                <FaRegShareSquare className='post--share'/>
                <span>Share</span>
            </div>
        </div>
    </div>
  )
}

export default Post