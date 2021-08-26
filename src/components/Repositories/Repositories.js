import React from 'react'
import moment from 'moment';
import './Repositories.scss'

function Repositories({
  data,
  page,
  onChangePage
}) {

  return (
    <>
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
      
      <div className="Page">
      {
        /*
         page && Object.keys(page).map(item => {
          return (
            <button key={item} onClick={() => onChangePage(page[item].page)}>{page[item].rel}</button>
          )
        })
        */
      }
      {page && page.prev && <button onClick={() => onChangePage(page.prev.page)}>Previous</button> }
      {page && page.first && <button onClick={() => onChangePage(page.first.page)}>First</button> }
      {page && page.next && <button onClick={() => onChangePage(page.next.page)}>Next</button> }
      {page && page.last && <button onClick={() => onChangePage(page.last.page)}>Last</button> }
      </div>
      
    </>
  )
}

export default Repositories
