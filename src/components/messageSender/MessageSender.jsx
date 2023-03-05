import React from 'react'
import './messageSender.scss'
function MessageSender() {
  return (
    <div className='messageSender__wrapper'>
        <div className="messageSender__top">
            <a className="avatar" href='#' style={{
                backgroundImage: `url("https://i.ibb.co/HFXm0G2/Bo-th-i.jpg")`
            }}></a>
            <input type="text" placeholder='Đang nghĩ gì thế bro ?'  disabled/>
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <div className='option'>
                    <div className="icon" style={{
                        backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/4406/4406275.png')`
                    }}></div>
                    <span>Livestream</span>
                </div>
            </div>
            <div className="messageSender__option">
                <div className='option'>
                    <div className="icon" style={{
                        backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/3820/3820184.png')`
                    }}></div>
                    <span>Ảnh/video</span>
                </div>
            </div>
            <div className="messageSender__option">
                <div className='option'>
                    <div className="icon" style={{
                        backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/9902/9902413.png')`
                    }}></div>
                    <span>Cảm xúc</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageSender