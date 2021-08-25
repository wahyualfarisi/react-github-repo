import React from 'react'
import './Profile.scss';

function Profile({ data }) {
    const { name, avatar_url, followers, following, bio } = data;
    return (
        <section className="Profile">
          <img src={avatar_url} alt="user" />
          <div className="Profile_info">
            <h2 className="Profile_info-name">{name ? name : '-'}</h2>
            <h5 className="Profile_info-bio">{bio}</h5>
            <div className="Profile_subs">
              <span>Followers: {followers} </span>
              <span>Following: {following} </span>
            </div>
          </div>
        </section>
    )
}

export default Profile
