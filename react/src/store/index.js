import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ui from './ui';
import questions from './questions';

const store = createStore(combineReducers({
    ui,
    questions
}), applyMiddleware(thunk));

export default store;
