import React from 'react';
import styles from './styles.module.css';
import ItemBox from '../ItemBox';

class ListBox extends React.Component {
  render() {
    const {
      scenes,
      url,
    } = this.props;
    return (
      <div className={styles.box}>
        {scenes.map(scene => {
          return (
            <ItemBox key={scene.id} scene={scene} url={url}></ItemBox>
          )
        })}
      </div>
    )
  }
}

export default ListBox;