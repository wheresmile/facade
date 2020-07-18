import React from 'react';
import styles from './styles.module.css';

import DiscussionBox from 'Components/Discussion/DiscussionBox';

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
              return (<DiscussionBox {...discussion}></DiscussionBox>);
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
    {discussionTitle:"又是一年高考的时间，今年的考生加油啊！", nickname:"jingwei", voteCount:0, opinionCount:2, link:"https://jingwei.link"},
    {discussionTitle:"意大利配樂大師Ennio Morriconne 逝世", nickname:"chalvern", voteCount:0, opinionCount:2, link:"https://jingwei.link"},
  ],
  currentForum: 'general',
  activeSortingMethod: 'date',
  onChangeSortingMethod: (val) => { },
  userProfile: false,
};

export default FeedBox;