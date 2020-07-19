import React from 'react';
import styles from './styles.module.css';

import { connect } from 'react-redux';
import ItemBox from '../ItemBox';

class ListBox extends React.Component {
  render() {
    const {
      loading,
      checklists,
    } = this.props;

    return (
      <div className={styles.container}>

        { loading && <div className={styles.loading}>Loading...</div> }
        { !loading &&
          <div className={styles.discussions}>
            { checklists && checklists.map(checklist => {
              return (<ItemBox key={checklist.id} {...checklist}></ItemBox>);
            })}
          </div>
        }
      </div>
    );
  }
}


ListBox.defaultProps = {
  loading: false,
  checklists: [
    {description:"又是一年高考的时间，今年的考生加油啊！", id:1, checked_count:1},
    {description:"意大利配樂大師Ennio Morriconne 逝世", id:2, checked_count:1},
  ],
};

export default connect(
  (state) => { 
    return {
      checklists: state.app.checklists,
    }; 
  }
)(ListBox);