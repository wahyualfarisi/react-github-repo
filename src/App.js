import './App.scss';
import Profile from './components/Profile/Profile';
import Repositories from './components/Repositories/Repositories';


function App() {
  return (
    <div className="App">

        <form className="Search_form">
          <input type="text" placeholder="Search github user" />
          <button type="submit">Search</button>
        </form>

        <Profile />

        <div className="Filter">
          <select>
            <option value="0">Sort</option>
            <option value="0">Pushed</option>
            <option value="1">Updated</option>
            <option value="2">Created</option>
          </select>
        </div>

        <Repositories />

    </div>
  );
}

export default App;
