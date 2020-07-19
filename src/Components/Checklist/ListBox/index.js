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
    {description:"早睡早起", id:1, checked_count:10, checked:true},
    {description:"对亲爱的说一声“辛苦了”", id:2, checked_count:2, last_review:{description:"点个赞点个赞点个赞点个赞点个赞点个赞点个赞点个赞点个赞点个赞点个赞点个赞点个赞点哈哈哈", author_nickname:"chalvern"}},
    {description:"做100个仰卧起坐30个俯卧撑", id:3, checked_count:1, checked:true},
  ],
};

export default connect(
  (state) => { 
    return {
      checklists: state.app.checklists,
    }; 
  }
)(ListBox);