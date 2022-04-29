import React from 'react';
import ScriptItem from './ScriptItem';

function ScriptList(props) {
    // console.log(props)
  return (
    <div className='script__list'>
        <ul>
          {props.videos.map((videos, index) => (
                <ScriptItem key={index} video={videos} />
            ))}
        </ul>
    </div>
  )
}

export default ScriptList;