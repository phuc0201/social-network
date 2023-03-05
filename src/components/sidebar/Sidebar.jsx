import React from 'react'
import './sidebar.scss'
function Sidebar() {
    function SidebarRow({imageUrl = '', Icon, title, border_radiusImage=false, link=""}){
        let Image = ''
        if(imageUrl!==''){
            Image = <div className={border_radiusImage===true? "Image border_radius" : "Image"} 
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                            width: 40,
                            height: 40,
                        }}
                     ></div>
        }
        return(
            <a href={link} className = "sidebarRow">
                {Image}
                {Icon && <Icon/>}
                <h4 className='title'>{title}</h4>
            </a>
        );
    }
    return (
        <div className='sidebarContainer'>
            <SidebarRow link='/idUser' border_radiusImage={true} imageUrl={"https://i.ibb.co/HFXm0G2/Bo-th-i.jpg"} title='Trịnh Hoàng Phúc'/>
            <SidebarRow link='/friends' imageUrl='https://cdn-icons-png.flaticon.com/512/9774/9774568.png' title="Bạn bè"/>
            <SidebarRow link='/groups' imageUrl='https://cdn-icons-png.flaticon.com/512/5675/5675392.png' title="Nhóm"/>
        </div>
    )
}

export default Sidebar