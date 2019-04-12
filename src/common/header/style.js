import styled from 'styled-components';
import Logo from '../../statics/lo.png';

export const HeaderH = styled.div`
    height:56px;
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

export const Search = styled.input.attrs({
    placeholder:'搜索'
})`
    padding:0 20px;
    width:200px;
    height:30px;
    box-sizing:border-box;
    border-radius:19px;
    border:0;
    background:#EEEEEE;
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
