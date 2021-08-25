import { useState } from 'react';
import './App.scss';
import Profile from './components/Profile/Profile';
import Repositories from './components/Repositories/Repositories';
import { connect } from 'react-redux';
import {
  searchGithubUser
} from './store/actions';
import { Spinner } from './components/UI/Spinner/Spinner';

function App({
  onSearchGithubUser,
  isLoadingSearch,
  profile,
  error,

  repo,
  isLoadingRepo,
  errorRepo
}) {

  const [searchText, setSearchText] = useState('');

  const submitHandler = (e) => {
      e.preventDefault();
      onSearchGithubUser(searchText);
  }



  return (
    <div className="App">

        <form className="Search_form" onSubmit={submitHandler}>
          <input 
            type="text" 
            placeholder="Search github user"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button 
            disabled={searchText.length === 0 || isLoadingSearch}
            type="submit">
            Search
          </button>
        </form>

        {isLoadingSearch && <div className="App_load-user"><Spinner /></div>}
        
        {!isLoadingSearch && profile && <Profile data={profile} />}

        {isLoadingRepo &&  <div className="App_load-user"><Spinner /></div> }

        {!isLoadingRepo?.repo?.repo.length > 0 ? (
            <Repositories data={repo} />
        ) : null }
    </div>
  );
}

const mapStateToProps = state => {
  return {
      profile: state.github.profile.data,
      isLoadingSearch: state.github.profile.isLoadingSearch,
      errorSearch: state.github.profile.error,

      repo: state.github.repositories.data,
      isLoadingRepo: state.github.repositories.isLoading,
      errorRepo: state.github.repositories.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchGithubUser: (value) => dispatch( searchGithubUser(value) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
