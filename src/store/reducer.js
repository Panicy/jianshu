import {combineReducers } from 'redux-immutable';
import {reducer as HeaderReducer} from './../common/header/store';
import {reducer as HomeReducer} from '../pages/home/store';

//把reducer里面的对象都变成immutable格式
const Reducer = combineReducers({
    Header:HeaderReducer,
    Home:HomeReducer
})

export default Reducer;