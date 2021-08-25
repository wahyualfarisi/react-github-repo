import { combineReducers } from 'redux';
import githubReducers from './github';

const rootReducers = combineReducers({
    github: githubReducers
});

export default rootReducers