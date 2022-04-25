import React from 'react'

function YoutubeItem(props) {
    return (
        <li>
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
            <p className='title'>{props.video.snippet.title}</p>
        </li>
    )
}

function YoutubeList(props) {
    //console.log(props.lists.data.items)
  return (
    <div className='youtube__list'>
        <ul>
            {props.items.data.items.map((list, index) => (
                <YoutubeItem key={index} video={list} />
            ))}
        </ul>
    </div>
  )
}

export default YoutubeList;