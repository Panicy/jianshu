import * as constants from './constant';
import Axios from 'axios';
import { fromJS } from 'immutable';

const getListAction=(data,totalPage)=>({
    type:constants.GET_HEADERLIST,
    data:fromJS(data),
    totalPage
})
export const showSearch=()=>({
    type:constants.SHOW_SEARCH
})
export const closeSearch=()=>({
    type:constants.ClOSE_SEARCH
})
export const getList=()=>{
    return (dispatch)=>{
        Axios.get('/api/headerList.json').then((res)=>{
            const totalPage=Math.ceil(res.data.data.length/5)
            
            dispatch(getListAction(res.data.data,totalPage))
        }).catch((error)=>{
            console.log('error:'+ error)
        })
    }
}
export const mouseEnter=()=>({
   type:constants.MOUSEENTER
})
export const mouseLeave=()=>({
    type:constants.MOUSELEAVE
})
export const upPageAction=(page)=>({
    type:constants.UPGAPE,
    page

})