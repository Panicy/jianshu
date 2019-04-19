import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
    TopicWidget,
    TopicItem,
    MoreItem
} from '../style';
class Topic extends Component{
    render(){
        const {list} =this.props;
        return (
            <TopicWidget>
                {list.map((item)=>{
                    return(
                        //因为是immutable数据，所以要用get才能取出来
                        <TopicItem key={item.get('id')}>
                            <img className='TopicItemImg' src={item.get('imgUrl')} alt=''/>
                            {item.get('title')}
                        </TopicItem>
                    )
                })}
                <MoreItem>
                    更多热门专题
                    <i className='iconfont more'>&#xe63b;</i>
                </MoreItem>
            </TopicWidget>
        )
    }
}   

    const mapState=(state)=>({
        list:state.getIn(['Home','TopicList'])
    })

export default connect(mapState,null)(Topic);