import Axios from './../../axios-instance';
import parseLinkHeader from 'parse-link-header';
import { 
    LOAD_REPOSITORI_FAILED,
    LOAD_REPOSITORI_START,
    LOAD_REPOSITORI_SUCCESS,
    SEARCH_GITHUBUSER_FAILED,
    SEARCH_GITHUBUSER_START, 
    SEARCH_GITHUBUSER_SUCCESS
} from './types';

export const searchGithubUser = ( value ) => {
    return dispatch => {
        dispatch({ type: SEARCH_GITHUBUSER_START })
        Axios.get(`/users/${value}`)
            .then(res => {
                dispatch({
                    type: SEARCH_GITHUBUSER_SUCCESS,
                    payload: res.data
                })
                dispatch( loadRepositories() )
            })
            .catch(err => {
                console.log(err.message)
                dispatch({
                    type: SEARCH_GITHUBUSER_FAILED,
                    error: err.message
                })
            })
    }
}

export const loadRepositories = (query = null ) => {
    return (dispatch, getState) => {
        const { profile } = getState().github;
        dispatch({ type: LOAD_REPOSITORI_START });
        Axios.get(`/users/${profile.data.login}/repos?sort=pushed&${query}`)
        .then(res => {
            dispatch({
                type: LOAD_REPOSITORI_SUCCESS,
                payload: res.data,
                page: parseLinkHeader(res.headers.link)
            })
        })
        .catch(err => {
            dispatch({
                type: LOAD_REPOSITORI_FAILED,
                error: err.message
            })
        })
    }
}