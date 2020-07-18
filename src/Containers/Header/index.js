import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import styles from './styles.module.css';
import appLayout from 'Shared/appLayout.module.css';

import Logo from "Components/Header/Logo";
import UserMenu from "Components/Header/UserMenu";
import NavigationBar from 'Components/Header/NavigationBar';

class Header extends React.Component {
  renderNavLinks() {
    const { forums } = this.props;

    if (forums) {
      return forums.map((forum) => {
        return {
          id: forum._id,
          name: forum.forum_name,
          link: `/${forum.forum_slug}`,
        };
      });
    }

    return null;
  }

  render() {
    return(
      <div className={classnames(appLayout.constraintWidth)}>
        <div className={styles.headerTop}>
          <Logo />
          <UserMenu />
        </div>
        <NavigationBar navigationLinks={this.renderNavLinks()} />
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    user: state.user,
    forums: [
      {_id:0, forum_name:"首页", forum_slug:""}, 
      {_id:1, forum_name:"清单", forum_slug:"checklist"},
      {_id:2, forum_name:"我", forum_slug:"user"},
      {_id:3, forum_name:"今日", forum_slug:"metto"},
    ],
  }; }
)(Header);