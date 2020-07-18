import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './styles.module.css';


class NavigationBar extends React.Component {
  render() {
    const { navigationLinks } = this.props;

    if (navigationLinks) {
      return (
        <ul className={styles.navigationBar}>
          { navigationLinks.map(link => {
              return (
                <li key={link.id}>
                  <NavLink exact={link.id === 0} to={link.link}
                    className={styles.links}
                    activeClassName={styles.linkActive}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
              })
          }
        </ul>
      );
    }

    return null;
  }
}


NavigationBar.defaultProps = {
  navigationLinks: [
    {
      id: 0,
      name: '首页',
      link: '/',
    },
  ],
};

NavigationBar.propTypes = {
  navigationLinks: PropTypes.array,
};

export default NavigationBar;