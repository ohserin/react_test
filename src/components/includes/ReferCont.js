import React from 'react'
import { Link } from 'react-router-dom';

function ReferItem ({id, title, desc}) {
  return (
    <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td><Link to={{
      pathname : "/refer-detail",
      state: {id, title, desc},
    }}>
      {desc.slice(0, 180)}
    </Link>
    </td>
  </tr>
  )
}

function ReferCont({refer, color}) {
  console.log(refer)
  return (
    <section className={`refer__cont ${color}`}>
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <table>
            <colgroup>
              <col style={{width: "10%"}} />
              <col style={{width: "20%"}} />
              <col style={{width: "70%"}} />
            </colgroup>
            <tbody>
            {refer.map((refer) => (
              <ReferItem
              key={refer.id}
              id={refer.id}
              desc={refer.desc}
              title={refer.title}
              />
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>  
  )
}

export default ReferCont