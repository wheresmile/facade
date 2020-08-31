import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import stylesG from '../styles.module.css';

class Invitation extends React.Component{
  render() {
    const {
      invitations,
      addInvitation,
    } = this.props;

    const allInvitationCounts = 10;

    return (
      <div className={stylesG.profileBody}>
        <div className={stylesG.header}>
          <div>
            邀请码({invitations.length}/{allInvitationCounts})
          </div>
          { (invitations.length < allInvitationCounts)  &&
            <div className={styles.addInvitation} onClick={addInvitation}>
            <i className={"fa fa-plus-square-o"} aria-hidden="true"></i> 增加
            </div>
          }
        </div>
        <div className={styles.invitationsBox}>
          {invitations && invitations.map(invitation => {
            return (
              <div key={invitation.code} 
                   className={classnames(styles.invitation, invitation.is_used && styles.invitationUsed,)}
              >
                <div className={styles.invitationCode}>
                  {invitation.code}
                </div>
                <div>
                  {invitation.is_used ? "已使用" : "未使用"}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Invitation;