import React,{Component} from 'react';
import {connect } from 'react-redux';
import {
    ListWidget,
    ListItem,
    ListItemText,
    ListItemTextTile,
    ListItemTextBody

} from '../style';
class List extends Component{
    render(){
        const { list } =this.props;
        return (
           <ListWidget>
               {
                   list.map((item)=>{
                       return(
                        <ListItem key={item.get('id')}> 
                            <img className='ListImg' src={item.get('imgUrl')} alt='' />
                        <ListItemText>
                                <ListItemTextTile>{item.get('title')}</ListItemTextTile>
                                <ListItemTextBody>{item.get('content')}</ListItemTextBody>
                        </ListItemText>
                    </ListItem>
                       )
                   })
               }
           </ListWidget>
        )
    }
}   
const mapState=(state)=>({
    list:state.getIn(['Home','list'])
})
export default connect(mapState,null)(List);