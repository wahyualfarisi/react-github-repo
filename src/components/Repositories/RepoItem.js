import React from 'react'
import moment from 'moment';

function RepoItem({
    id,
    full_name,
    description,
    language,
    updated_at
}) {
    return (
        <li className="Repositories_item" key={id}>
            <h3>{full_name}</h3>
            <h5>{description && description}</h5>
            <div className="tag">
            {language && <span>{language}</span> } 
            </div>
            <div className="info">
            {updated_at && <div className="updated_at">Updated At {moment(updated_at).fromNow()}</div> }
            </div>
        </li>
    )
}

export default RepoItem
