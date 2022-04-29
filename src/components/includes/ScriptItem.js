import React from 'react'


function ScriptItem(props) {
  // console.log(props)
  return (
    <li>
            <a href={`https://www.themoviedb.org/movie/${props.video.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${props.video.poster_path}`} />
              <p className='title'>{props.video.title}</p>
            </a>
        </li>
  )
}

export default ScriptItem;