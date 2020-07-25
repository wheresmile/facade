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
    const { tabs } = this.props;

    if (tabs) {
      return tabs.map((tab) => {
        return {
          id: tab.id,
          name: tab.display_name,
          link: `/${tab.slug}`,
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

Header.defaultProps = {
  tabs: [
    {id:1, display_name: "首页", slug: ""},
    {id:2, display_name: "清单", slug: "checklist"},
    {id:3, display_name: "我", slug: "user"},
    {id:4, display_name: "今日", slug: "motto"},
  ]
}

export default connect(
  (state) => { 
    return {
      tabs: state.app.tabs,
    }; 
  }
)(Header);