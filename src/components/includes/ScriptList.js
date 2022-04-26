import React from 'react'


function ScriptItem(props) {
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w500/${props.video.poster_path}`} />
            <p className='title'>{props.video.title}</p>
        </li>
    )
}

function ScriptList(props) {
    //console.log(props.lists.data.items)
  return (
    <div className='youtube__list'>
        <ul>
            {props.items.data.results.map((list, index) => (
                <ScriptItem key={index} video={list} />
            ))}
        </ul>
    </div>
  )
}

export default ScriptList;