import { useState } from 'react';
import './App.scss';
import Profile from './components/Profile/Profile';
import Repositories from './components/Repositories/Repositories';
import { connect } from 'react-redux';
import {
  searchGithubUser,
  loadRepositories
} from './store/actions';
import { Spinner } from './components/UI/Spinner/Spinner';
import Search from './components/Search/Search';

function App({
  onSearchGithubUser,
  isLoadingSearch,
  profile,
  errorSearch,

  repo,
  isLoadingRepo,
  errorRepo,
  page,

  onLoadRepo
}) {

  const [searchText, setSearchText] = useState('');

  const submitHandler = (e) => {
      e.preventDefault();
      onSearchGithubUser(searchText);
  }

  const changePageHandler = (page) => {
    onLoadRepo(`&page=${page}`)
  }

  return (
    <div className="App">

        <Search 
          isLoadingSearch={isLoadingSearch} 
          setSearchText={setSearchText} 
          searchText={searchText} 
          submitHandler={submitHandler}
        />

        {/* Profile Component Start */} 
        {isLoadingSearch && <div className="App_load-user"><Spinner /></div>}
        
        {!isLoadingSearch && profile && <Profile data={profile}  /> }
        {/* Profile Component End */} 

        {/* Repo Component Start */} 
        {isLoadingRepo &&  <div className="App_load-user"><Spinner /></div> }

        {!isLoadingRepo?.repo?.repo.length > 0 && <Repositories data={repo} page={page} onChangePage={changePageHandler} /> }
        {/* Repo Component End */} 
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
      errorRepo: state.github.repositories.error,
      page: state.github.repositories.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchGithubUser: (value) => dispatch( searchGithubUser(value) ),
    onLoadRepo: (query) => dispatch( loadRepositories(query) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
