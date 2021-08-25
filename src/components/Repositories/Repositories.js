import React from 'react'
import './Repositories.scss'

function Repositories() {
    return (
        <ul className="Repositories">

          <li className="Repositories_item">
              <h3>Laravel Framework</h3>
              <h5>Api Project list Description</h5>
              <div className="tag">
                <span>Laravel Framework</span>
                <span>PHP</span>
              </div>
              <div className="info">
                <div className="language">HTML</div>
                <div className="updated_at">Updated 13 days ago</div>
              </div>
          </li>

          <li className="Repositories_item">
              <h3>React JS Movie</h3>
              <h5>Api Project list Description</h5>
              <div className="tag">
                <span>JS</span>
                <span>REACT</span>
              </div>
              <div className="info">
                <div className="language">HTML</div>
                <div className="updated_at">Updated 13 days ago</div>
              </div>
          </li>
        </ul>
    )
}

export default Repositories
