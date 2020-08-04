import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

import Button from 'Components/Buttons/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postLogout } from 'redux/account/actions';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeSubMenu: false };
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
    this.clickListener = (event) => {
      if (event.target 
          && event.target instanceof HTMLElement 
          && !event.target.closest("."+styles.container)) {
        this.handleClickOutside(event);
      }
    }
  }

  handleClickOutside(event) {
    this.setState({ activeSubMenu: false });
  }

  toggleSubMenu() {
    this.setState((prevState) => {
      return { activeSubMenu: !prevState.activeSubMenu };
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.clickListener)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickListener);
  }

  renderSubMenu() {
    const { activeSubMenu } = this.state;

    const {
      isLogged,
      postLogout,
    } = this.props;

    if (activeSubMenu) {
      return (
        <div className={styles.subMenu}>
          <Button onClick={this.toggleSubMenu} className={styles.subMenuClose} alwaysActive>
            <i className={classnames('fa fa-close')} aria-hidden="true"></i>
          </Button>
          { isLogged && <a className={styles.subMenuItem} href="/" onClick={postLogout}>退出</a> }
        </div>
      );
    }

    return null;
  }

  render(){
    const {
      userInfo,
      isLogged,
    } = this.props;

    if (isLogged){
      return (
        <div style={{ position: 'relative' }}>
          <div className={styles.container} onClick={this.toggleSubMenu}>
            <span className={styles.title}>{userInfo.nickname}</span>
          </div>
          {this.renderSubMenu()}
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <Link to="/signin">
            <Button alwaysActive className={classnames(styles.signInBtn, styles.title)}>
              注册/登录
            </Button>
          </Link>
        </div>
      );
    }
  }
}

export default connect(
  (state) => { 
    return {
      userInfo: state.user.info,
      isLogged: state.user.isLogged,
    }; 
  },
  (dispatch) => {
    return {
      postLogout: (event) => {dispatch(postLogout(event));},
    }
  }
)(UserMenu);
