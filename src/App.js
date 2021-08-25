import './App.scss';


function App() {
  return (
    <div className="App">

        <form className="Search_form">
          <input type="text" placeholder="Search github user" />
          <button type="submit">Search</button>
        </form>

        <section className="Profile">
          <img src="https://avatars.githubusercontent.com/u/25720712?v=4" alt="user" />
          <div className="Profile_info">
            <h2 className="Profile_info-name">Wahyu Alfarisi</h2>
          </div>
        </section>

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

    </div>
  );
}

export default App;
