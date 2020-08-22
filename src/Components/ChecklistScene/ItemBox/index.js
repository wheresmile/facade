import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

class ItemBox extends React.Component {

  render() {
    const {
      scene,
      url,
    } = this.props;

    return (
      <Link to={`${url}/${scene.id}`} className={styles.box} >
        <div>{scene.description}({scene.item_count})</div>
      </Link>
    )
  }
}

export default ItemBox;