import React, { Fragment } from 'react';
import styles from './styles.module.css';
import appLayout from 'Shared/appLayout.module.css';

import classnames from 'classnames';

import Header from 'Containers/Header';
import Invitation from 'Components/Profiles/Invitation';
import { connect } from 'react-redux';
import { getUserAllInvitations } from 'redux/user/actions';


class Profile extends React.Component {
  componentDidMount() {
    const {
      getUserAllInvitations,
    } = this.props;

    getUserAllInvitations();
  }

  render() {
    const {
      invitations,
    } = this.props;
    
    return (
      <Fragment>
        <Header renderTabs={false} />
        <div className={classnames(appLayout.constraintWidth, styles.contentArea)}>
          <Invitation invitations={invitations}></Invitation>
        </div>
      </Fragment>
    )
  }
}

export default connect(
  (state) => { return {
      isLogged: state.user.isLogged,
      invitations: state.user.invitations,
  }
  },
  (dispatch) => { return {
    getUserAllInvitations: () => { dispatch(getUserAllInvitations()); }
  }
  }
)(Profile);