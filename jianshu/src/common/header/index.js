import React from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { CSSTransition } from 'react-transition-group';
import  * as actionCreators  from './store/actionCreators';

//stateless component, improving the performance of this component
const Header = (props) => {
    return (
        <div>
        <HeaderWrapper><Logo href='/'></Logo>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载app</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames='slide'
                    >
                        <NavSearch className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</span>
                </SearchWrapper>
            </Nav>
        </HeaderWrapper>
        <Addition>
            <Button className='writing'><span className='iconfont'>&#xe602; </span>写文章</Button>
            <Button className='reg'>注册</Button>
        </Addition>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused'])
        //focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);