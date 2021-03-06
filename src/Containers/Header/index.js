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
    const {
      renderTabs,
    } = this.props;

    return(
      <div className={classnames(appLayout.constraintWidth)}>
        <div className={styles.headerTop}>
          <Logo />
          <UserMenu />
        </div>
        {renderTabs &&  <NavigationBar navigationLinks={this.renderNavLinks()} />}
      </div>
    );
  }
}

Header.defaultProps = {
  renderTabs: false,
  tabs: [
    {id:1, display_name: "首页", slug: ""},
    {id:2, display_name: "今日清单", slug: "checklist"},
  ]
}

export default connect(
  (state) => { 
    return {
      tabs: state.app.tabs,
    }; 
  }
)(Header);