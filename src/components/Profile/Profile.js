import React from 'react'
import './Profile.scss';

function Profile() {
    return (
        <section className="Profile">
          <img src="https://avatars.githubusercontent.com/u/25720712?v=4" alt="user" />
          <div className="Profile_info">
            <h2 className="Profile_info-name">Wahyu Alfarisi</h2>
          </div>
        </section>
    )
}

export default Profile
