import React from 'react';
import ScriptItem from './ScriptItem';

function ScriptList(props) {
    // console.log(props)
  return (
    <div className='script__list'>
        <ul>
            {props.videos.map((video, index) => (
                <ScriptItem key={index} video={video} />
            ))}
        </ul>
    </div>
  )
}

export default ScriptList;