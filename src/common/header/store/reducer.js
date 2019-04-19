import * as constants from './constant';
import { fromJS} from 'immutable';

const defaultState=fromJS({
        Focus:false,
        list:[],
        mouseIn:false,
        page:1,
        totalPage:1,
    })
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.SHOW_SEARCH:
            return state.set('Focus',true);
        case constants.ClOSE_SEARCH:
            return state.set('Focus',false);
        case constants.GET_HEADERLIST:
            return state.set('list',action.data).set('totalPage',action.totalPage);
        case constants.MOUSEENTER:
            return state.set('mouseIn',true);
        case constants.MOUSELEAVE:
            return state.set('mouseIn',false);
        case constants.UPGAPE:
            return state.set('page',action.page)
        default:
            return state;   
    }
 
    
}