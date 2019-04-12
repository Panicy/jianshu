import React ,{Component} from 'react';
import {
    HeaderH,
    HeaderBody,
    LogoDemo,
    Nav,
    NavItem,
    Search,
    Btnview,
    Button

} from './style'

class Header extends Component{
    render(){
        return(
            <HeaderH>
                <HeaderBody>
                    <LogoDemo/>
                    <Nav>
                        <NavItem className='left'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        <Search></Search>
                        <NavItem className='right'>Aa</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        
                    </Nav>
                    <Btnview>
                        <Button className='reg'>注册</Button>
                        <Button className='book'>写文章</Button>
                    </Btnview>
                </HeaderBody>
            </HeaderH>
        )
    }

}

export default Header;