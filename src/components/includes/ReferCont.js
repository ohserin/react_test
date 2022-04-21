import React from 'react';
import propType from "prop-types";
import { Link } from "react-router-dom";


function ReferCont({id, title, desc, use , desc2, element, tag, version, view, image, link, Definition, Accessibility, mdn, w3c}) {
  return (
    <li>
      <Link to={{
        pathname: "refer-detail",
        state: {id, title, desc, use, desc2, element, tag, version, view, image, link, Definition, Accessibility, mdn, w3c}
      }}>
        <span className='num'>{id}</span>
        <span className='title'>{title}</span>
        <span className='desc'>{desc}</span>
        <span className='use'>{use}</span>
      </Link>
    </li>
  )
}

ReferCont.propType = {
  id: propType.number.isRequired,
  title: propType.string.isRequired,
  desc: propType.string.isRequired,
  use: propType.string.isRequired,
}
export default ReferCont;