import React from 'react'
import {Storys, Users} from '../../dummyData'
import './story.scss'
import Story from './Story'
function Storyreel() {
  return (
    <div className='storyReel'>
        {
            Storys.map((s)=>(
                <Story 
                    template={s.template}
                    profileSrc={Users.filter((u) => u.id === s.userId)[0].profilePicture}
                    title={Users.filter((u) => u.id === s.userId)[0].username}
                />
            ))
        }
    </div>
  )
}

export default Storyreel