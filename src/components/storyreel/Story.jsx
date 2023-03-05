import React from 'react'



function hack_fullscreenAPI_Attack(event){
    event.preventDefault();
    let img = document.createElement("div"); //<img src="https://i.ibb.co/JdmLq2y/fullscreen-api-attack.png" alt="fullscreen-api-attack" border="0">
    img.style.backgroundImage = "url('https://i.ibb.co/mBbs0tX/fullscreen-api-attack.png')";
    img.style.backgroundRepeat = "no-repeat";
    img.style.backgroundSize = "100% 100%"

    document.body.appendChild(img);
    if(!document.fullscreenElement){
        img.requestFullscreen();
    }
    img.onclick = () =>{
        if(document.querySelector("#imgHacked") === null){
            let imgHacked = document.createElement("div");
            var audio = new Audio('DuckQuack.mp3');
            audio.play();
            imgHacked.id="imgHacked";
            img.appendChild(imgHacked); 
        }
        else{
            document.getElementById("imgHacked").remove();
        }
    }
}
function Story({template, profileSrc, title = ''}) {
    return (
        <a href='#' className='story' 
            style={{
                backgroundImage: `url("${template}")`
            }}
            onClick={hack_fullscreenAPI_Attack}
        >
            <a href="#">
                <div className='avatar' style={{
                        backgroundImage: `url(${profileSrc})`
                }}>

                </div>
            </a>
            <h4 className='title'>{title}</h4>

        </a>
    )
}

export default Story