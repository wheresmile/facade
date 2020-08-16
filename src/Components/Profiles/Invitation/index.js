import React from 'react';
import styles from '../styles.module.css';

class Invitation extends React.Component{
  render() {
    const {
      invitations,
    } = this.props;

    return (
      <div className={styles.profileBody}>
        <div className={styles.header}>
          邀请码
        </div>
        <div>
          {invitations && invitations.map(invitation => {
            return (
              <div key={invitation.code}>
              {invitation.code}·{invitation.is_used ? "已使用" : "未使用"}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Invitation;