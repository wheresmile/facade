import React from 'react';
import styles from './styles.module.css';

import ItemBox from '../ItemBox';

class ListBox extends React.Component {
  constructor(props){
    super(props);
    this.handleInputChange.bind(this);
  }
  handleInputChange = (id, event) => {
    event.target.checked=true;
  }

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
              return (<ItemBox key={checklist.id} 
                checklist={checklist} 
                onClick={(event) => this.handleInputChange(checklist.id, event)}></ItemBox>);
            })}
          </div>
        }
      </div>
    );
  }
}

export default ListBox;