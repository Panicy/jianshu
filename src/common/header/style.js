import styled from 'styled-components';
import Logo from '../../statics/lo.png';

export const HeaderH = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:56px;
    background:white;
    width:100%;
    box-shadow:0px 0px 8px #333333;
    border-bottom:1px solid #f0f0f0;
`;
export const HeaderBody= styled.div`
    position:relative;
    margin:0 10%;
    box-sizing:border-box;
    height:56px;
`;
export const LogoDemo =styled.a`
    position:absolute;
    left:0;
    top:0;
    width:100px;
    height:56px;
    background:url(${Logo});
    background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    height:56px;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`;


export const NavItem=styled.div`
    height:56px;
    margin:0 20px;
    line-height:56px;
    display:inline-block;
    text-align:center;
    font-size:14px;
    &.left{
        flot:left;
    }
    &.right{
        float:right;
        color:#969696;
    }

`;
export const SearchDemo=styled.div`
    line-height:56px;
    position:relative;
    .zoom{
        position:absolute;
        right:0px;
        top:15px;
        height:28px;
        line-height:28px;
        width:30px;
        border-radius:15px;
        text-align:center;
    }
    .focuBg{
        background:#EA6F5A;
        color:white;
    }
    .Searchcss-enter{
        transition: all .2s ease;
    }
    .Searchcss-enter-active{
        width:240px;
    }
    .Searchcss-exit{
        transition: all .2s ease;
    }
    .Searchcss-exit-active{
        width:160px;
    }
`
export const SearchInfo=styled.div`
    position:absolute;
    z-index:999;
    top:56px;
    left:0px;
    width:240px;
    background:white;
    box-shadow:2px 2px 8px #333333;
    padding: 0 15px;
    text-align:left;
    overflow:hidden;
    box-sizing:border-box;
    border-radius:5px;

`
export const SearchInfoTile=styled.div`
    text-align:left;
    height:35px;
    line-height:35px;
    font-size:13px;
`
export const SearchInfoTileRight=styled.a`
    float:right;
    cursor:pointer;
    .spin{
        margin:2px 2px 0 0;
        font-size:14px;
        display:block;
        float:left;
        transition:.5s;
        transform:rotate(0deg);
        transform-origin:center center;
    }

`
export const SearchItemBox=styled.div`
    display:flex;
    flex-wrap: wrap
`
export const SearchInfoItem=styled.a`
    border:1px solid #787878;
    color:#787878;
    font-size:13px;
    height:20px;
    line-height:20px;
    padding: 0 2px ;
    font-size:12px;
    margin:0px 10px 15px 0;
    border-radius:3px;
`


export const Search = styled.input.attrs({
    placeholder:'搜索'
})`
    padding:0 35px 0 10px;
    width:160px;
    height:30px;
    box-sizing:border-box;
    border-radius:19px;
    border:0;
    background:#EEEEEE;
    &.focus{
        width:240px;
    }

`;
export const Btnview=styled.div`
    position:absolute;
    right:0;
    top:0;

`
export const Button =styled.div`
    padding:0 20px;
    height:36px;
    line-height:36px;
    margin:10px 10px 0 0;
    float:left;
    border-radius:20px;
    font-size:15px;
    &.reg{
        border:1px solid #EA6F5A;
        color:#EA6F5A;
    }
    &.book{
        background:#EA6F5A;
        color:white;
    }

`
