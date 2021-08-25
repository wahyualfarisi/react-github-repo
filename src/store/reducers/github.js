import { 
    LOAD_REPOSITORI_FAILED,
    LOAD_REPOSITORI_START,
    LOAD_REPOSITORI_SUCCESS,
    SEARCH_GITHUBUSER_FAILED,
    SEARCH_GITHUBUSER_START, 
    SEARCH_GITHUBUSER_SUCCESS
} from "../actions/types";

const initialState = {
    searchText: '',
    profile:  {
        isLoadingSearch: false,
        error: null,
        data: null
    },
    repositories: {
        isLoading: false,
        error: null,
        data: []
    }
}

const github = ( state = initialState, action) => {

    switch(action.type){
        
        case SEARCH_GITHUBUSER_START:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    isLoadingSearch: true
                },
                repositories: {
                    ...state.repositories,
                    data: [],
                    error: null
                }
            }

        case SEARCH_GITHUBUSER_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    isLoadingSearch: false,
                    data: action.payload,
                    error: null
                }
            }

        case SEARCH_GITHUBUSER_FAILED:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    isLoadingSearch: false,
                    error: action.error,
                    data: null
                }
            }


        case LOAD_REPOSITORI_START:
            return {
                ...state,
                repositories: {
                    ...state.repositories,
                    isLoading: true
                }
            }

        case LOAD_REPOSITORI_SUCCESS:
            return {
                ...state,
                repositories: {
                    ...state.repositories,
                    isLoading: false,
                    data: action.payload
                }
            }

        case LOAD_REPOSITORI_FAILED:
            return {
                ...state,
                repositories: {
                    ...state.repositories,
                    isLoading: false,
                    data: [],
                    error: action.error
                }
            }

        default:
            return state;
    }
}


export default github;