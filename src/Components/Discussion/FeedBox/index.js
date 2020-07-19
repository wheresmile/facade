import React from 'react';
import styles from './styles.module.css';

import DiscussionBox from 'Components/Discussion/DiscussionBox';
import { connect } from 'react-redux';

class FeedBox extends React.Component {
  render() {
    const {
      type,
      loading,
      discussions,
    } = this.props;
    let discussionBoxTitle = '';
    if (type === 'general') discussionBoxTitle = '动态';
    if (type === 'pinned') discussionBoxTitle = '置顶';

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{discussionBoxTitle}</span>
        </div>

        { loading && <div className={styles.loading}>Loading...</div> }
        { !loading &&
          <div className={styles.discussions}>
            { discussions && discussions.map(discussion => {
              return (<DiscussionBox key={discussion.id} {...discussion}></DiscussionBox>);
            })}
          </div>
        }
      </div>
    );
  }
}


FeedBox.defaultProps = {
  type: 'general',
  loading: false,
  discussions: [
    {id:1, discussionTitle:"又是一年高考的时间，今年的考生加油啊！", voteCount:1, opinionCount:6, nickname:"jingwei", link:""},
    {id:2, discussionTitle:"意大利配樂大師Ennio Morriconne 逝世", voteCount:3, opinionCount:5, nickname:"chalvern", link:""},
    
  ],
  currentForum: 'general',
  activeSortingMethod: 'date',
  onChangeSortingMethod: (val) => { },
  userProfile: false,
};

export default connect(
  (state) => { 
    return {
      discussions: state.app.discussions,
    }; 
  }
)(FeedBox);