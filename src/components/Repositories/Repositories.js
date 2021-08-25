import React from 'react'
import moment from 'moment';
import './Repositories.scss'

function Repositories({
  data 
}) {
  return (
    <ul className="Repositories">
        {data.map(item => {
          return (
            <li className="Repositories_item" key={item.id}>
                <h3>{item.full_name}</h3>
                <h5>{item.description && item.description}</h5>
                <div className="tag">
                  {item.language && <span>{item.language}</span> } 
                </div>
                <div className="info">
                  {item.updated_at && <div className="updated_at">Updated At {moment(item.updated_at).fromNow()}</div> }
                </div>
            </li>
          )
        })}
    </ul>
  )
}

export default Repositories
