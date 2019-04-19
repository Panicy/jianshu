import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import { CSSTransition} from 'react-transition-group';
import {actions} from './store/index'; 
import {
    HeaderH,
    HeaderBody,
    LogoDemo,
    Nav,
    NavItem,
    SearchDemo,
    SearchInfo,
    SearchInfoTile,
    SearchInfoTileRight,
    SearchItemBox,
    SearchInfoItem,
    Search,
    Btnview,
    Button
} from './style'


 class Header extends Component{
    getSearch=()=>{
        const { List,Focus,MouseEnterBtn,MouseLeaveBtn,mouseIn,page,totalPage,newPageBtn} = this.props;
        const newList=List.toJS();
        const pageList=[];
        if(newList.length){
            for (let i=(page-1)*5;i<page*5;i++){
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    );
                }
                
            }
        }

        if(Focus || mouseIn){
           return (
           <SearchInfo
               onMouseEnter={MouseEnterBtn}
               onMouseLeave={MouseLeaveBtn}
           >
               <SearchInfoTile>
                   搜索
                   <SearchInfoTileRight
                    onClick={()=>newPageBtn(page,totalPage,this.spinIcon)}
                   >
                    <i ref={(Icon)=>this.spinIcon=Icon} className='iconfont spin'>&#xe63b;</i>
                   换一批</SearchInfoTileRight>
               </SearchInfoTile>
               <SearchItemBox>
                   {pageList}
               </SearchItemBox>
           </SearchInfo>
           )
       }else{
           return null
       }
   }
     render(){
         const { Focus, onFocus, onBlur,List} = this.props;
        return(
            <HeaderH>
                <HeaderBody>
                    <LogoDemo/>
                    <Nav>
                        <NavItem className='left'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        <NavItem>
                            <SearchDemo>
                                <CSSTransition
                                    in={Focus}
                                    timeout={200}
                                    classNames='Searchcss'
                                    >
                                    <Search
                                    onFocus={()=>onFocus(List)}
                                    onBlur={onBlur}
                                    className={Focus?'focus':''}></Search>
                                </CSSTransition>
                                <i className={Focus?'focuBg iconfont icon-sousuo zoom':'iconfont icon-sousuo zoom'}></i>
                                {this.getSearch()}
                            </SearchDemo>
                        </NavItem> 
                        <NavItem className='right'>
                            <i className='iconfont icon-Aa'></i>
                        </NavItem>
                        <NavItem className='right'>登录</NavItem>
                    </Nav>
                    <Btnview>
                        <Button className='reg'>注册</Button>
                        <Button className='book'>
                        <i className='iconfont icon-maobi '></i>
                            写文章
                        </Button>
                    </Btnview>  
                </HeaderBody>
            </HeaderH>
        )
     }


    
 }

const mapStateToProps=(state)=>({
    //因为是immutable格式的数据，所以要用get方法
    //具体方法可查阅immutable
    Focus:state.getIn(['Header','Focus']),
    List:state.getIn(['Header','list']),
    mouseIn:state.getIn(['Header','mouseIn']),
    page:state.getIn(['Header','page']),
    totalPage:state.getIn(['Header','totalPage']),

})
const mapDispatchToProps=(dispatch)=>({
    onFocus(list){
        //&&相当于if
        list.size===0 && dispatch(actions.getList())
        dispatch(actions.showSearch())
    },
    onBlur(){
        dispatch(actions.closeSearch());
    },
    MouseEnterBtn(){
        dispatch(actions.mouseEnter());
    },
    MouseLeaveBtn(){
        dispatch(actions.mouseLeave());
    },
    newPageBtn(page,totalPage,Icon){
        let originAngle=Icon.style.transform.replace(/[^0-9]/ig,'');
        if(originAngle){
            //转为10进制的数字
            originAngle=parseInt(originAngle,10)
        }else{
            originAngle=0
        }

        Icon.style.transform='rotate('+(originAngle+360)+'deg)'

        if(page<totalPage){
            dispatch(actions.upPageAction(page+1))
        }else{
            dispatch(actions.upPageAction(1))
        }
    }

})



export default connect(mapStateToProps,mapDispatchToProps)(Header);