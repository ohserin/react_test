import React from 'react'

function ScriptItem(props) {
  // console.log(props)
  return (
    <li>
      <img 
          src={`https://image.tmdb.org/t/p/w500/${props.video.poster_path}`} 
          alt={props.video.title} 
      />
            <p>{props.video.title}</p>

    </li>
  )
}

export default ScriptItem;