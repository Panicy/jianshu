import styled from 'styled-components';

export const HomeWidget=styled.div`
    margin:80px 20% 0;
    overflow:hidden;
`
export const HomeLeftWidget=styled.div`
    width:66%;
    margin:0 2%;
    float:left;
    .HomeImg{
        display:block;
        width:96%;
        height:280px;
        box-shadow:2px 2px 8px #333333;
        border-radius:4px;
    }
`
export const HomeRightWidget=styled.div`
    width:30%;
    float:right;

`

// Topic
export const TopicWidget=styled.div`
    padding:20px 10px 0 0;
    overflow:hidden;
    border-bottom:1px solid #f0f0f0;

`
export const TopicItem=styled.div`
    cursor:pointer;
    text-align:center;
    float:left;
    margin:0 18px 18px 0;
    height:32px;
    line-height:32px;
    border-radius:4px;
    color:#000;
    font-size:13px;
    background:#F7F7F7;
    border:1px solid #dcdcdc;
    padding-right:10px;
    .TopicItemImg{
        display:block;
        width:40px;
        height:32px;
        float:left;
        border-radius:4px 0 0 4px;
        margin-right:10px;
    }
`
export const MoreItem= styled.div`
    float:left;
    line-height:32px;
    font-size:13px;
    font-weight:500;
    .more{
        float:right;
        margin:13px px 0 5px;
    }

`
//list
export const ListWidget =styled.div`

`
export const ListItem=styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #f0f0f0;
    .ListImg{
        float:right;
        width:20%;
        margin: 0 2%;
        border-radius:5px;
        border:1px solid #f0f0f0;
    }
`
export const ListItemText=styled.div`
    width:75%;
    float:left;
`
export const ListItemTextTile=styled.a`
    font-weight:700;
    font-size:18px;
    line-height:24px;
`
export const ListItemTextBody=styled.p`
    font-size:13px;
    line-height:20px;
    color:#999;
`
//Recommend
export const RecommendWidget=styled.div`
    width:90%;
    margin: 0 5%;
`
export const RecommendWidgetItem=styled.div`
    margin-bottom:12px;
    .RecImg{
        width:90%;
        margin:0 5%;
    }
`
export const RecommendWidgetItemCode=styled.div`
    border:1px solid #f0f0f0;
    width:90%;
    margin:0 5%;
    height:100px;
    border-radius:5px;
    overflow:hidden;
    .codeImg{
        float:left;
        width:30%;
        height:80px;
        margin:10px 2%;
    }

`
export const RecommendWidgetItemCodeText=styled.div`
    float:left;
`
export const RecommendWidgetItemCodeTextTile=styled.a`
    font-weight:700;
    display:block;
    margin-top:25px;
    font-size:15px;

`
export const RecommendWidgetItemCodeTextBody=styled.p`
    font-size:13px;
    line-height:25px;
    color:#999;
`
