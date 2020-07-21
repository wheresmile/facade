import React, { Fragment } from 'react';
import styles from './styles.module.css';
import SimpleHeader from 'Components/Header/SimpleHeader';
import { connect } from 'react-redux';
import { getMotto } from 'App/actions';

class Motto extends React.Component {
  componentDidMount() {
    const {
      getMotto,
    } = this.props;

    getMotto();
  }

  render() {
    const {
      motto
    } = this.props;

    return (
      <Fragment>
        <SimpleHeader></SimpleHeader>
        <header className={styles.MottoHeader}>
          <div className={styles.MottoSentence}>{motto.details}</div>
          <div className={styles.MottoSource}>from: {motto.source}</div>
        </header>
      </Fragment>
    );
  }
}

Motto.defaultProps = {
  motto: { details: "今天可以做点什么有意义的事情？", source: "见周边"},
}

export default connect(
  (state) => {
    return {
      motto: state.app.motto,
    };},
  (dispatch) => { return {
    getMotto: () => { dispatch(getMotto()); },
  };}
)(Motto);