import React,{Component} from 'react';
import Hottest from './components/hottest';
import List from './components/list';
import Recommend from './components/recommend';
import Topic from './components/topic';
import {
    HomeWidget,
    HomeLeftWidget,
    HomeRightWidget
} from './style';

class Home extends Component{
    render(){
        return (
            <HomeWidget>
                <HomeLeftWidget>
                    <img className='HomeImg' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555653185834&di=9d43a6f93a3296dea63c9ce2a1c4cc29&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013c865874d729a8012060c8dbe0e8.png%401280w_1l_2o_100sh.png' alt='' />
                    <Topic />
                    <List />
                </HomeLeftWidget>
                <HomeRightWidget>
                    <Recommend />
                    <Hottest />
                </HomeRightWidget>
            </HomeWidget>
        )
    }
}   
export default Home;