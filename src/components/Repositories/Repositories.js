import React from 'react'
import './Repositories.scss'
import RepoItem from './RepoItem';

function Repositories({
  data,
  page,
  onChangePage
}) {

  return (
    <>
      <ul className="Repositories">
          {data.map( item => <RepoItem key={item.id} id={item.id} full_name={item.full_name} description={item.description} language={item.language} updated_at={item.updated_at} /> )}
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
        {page && page.first && <button onClick={() => onChangePage(page.first.page)}>First Page</button> }
        {page && page.prev && <button onClick={() => onChangePage(page.prev.page)}>Previous Page</button> }
        {page && page.next && <button onClick={() => onChangePage(page.next.page)}>Next Page</button> }
        {page && page.last && <button onClick={() => onChangePage(page.last.page)}>Last Page</button> }
      </div>
      
    </>
  )
}

export default Repositories
