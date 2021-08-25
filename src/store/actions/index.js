import Axios from './../../axios-instance';
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
                console.log(res);
                dispatch({
                    type: SEARCH_GITHUBUSER_SUCCESS,
                    payload: res.data
                })
                dispatch( loadRepositories( res.data.login ) )
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

export const loadRepositories = ( uname , query = null ) => {
    return dispatch => {
        dispatch({ type: LOAD_REPOSITORI_START });
        Axios.get(`/users/${uname}/repos?sort=pushed`)
        .then(res => {
            console.log(res);
            dispatch({
                type: LOAD_REPOSITORI_SUCCESS,
                payload: res.data
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