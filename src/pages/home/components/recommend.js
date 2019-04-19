import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    RecommendWidget,
    RecommendWidgetItem,
    RecommendWidgetItemCode,
    RecommendWidgetItemCodeText,
    RecommendWidgetItemCodeTextTile,
    RecommendWidgetItemCodeTextBody
 } from '../style';
class Recommend extends Component{

    render(){
        const {RecImgList} = this.props;
        return (
            <RecommendWidget>
                {
                    RecImgList.map((item,index)=>{
                      return (  <RecommendWidgetItem key={index}>
                                    <img className='RecImg' src={item} alt='' />
                                </RecommendWidgetItem>
                        )
                    })
                }
                <RecommendWidgetItem>
                    <RecommendWidgetItemCode>
                        <img className='codeImg' src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2041914800,1402897402&fm=26&gp=0.jpg' alt='' />
                        <RecommendWidgetItemCodeText>
                            <RecommendWidgetItemCodeTextTile>下载简书手机APP ></RecommendWidgetItemCodeTextTile>
                            <RecommendWidgetItemCodeTextBody>随时随地发现或创作内容</RecommendWidgetItemCodeTextBody>
                        </RecommendWidgetItemCodeText>
                    </RecommendWidgetItemCode>
                </RecommendWidgetItem>

            </RecommendWidget>
        )
    }
}   
const mapState=(state)=>({
    RecImgList:state.getIn(['Home','RecImgList'])
})
export default connect(mapState,null)(Recommend);