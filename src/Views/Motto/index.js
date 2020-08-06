import React, { Fragment } from 'react';
import styles from './styles.module.css';
import SimpleHeader from 'Components/Header/SimpleHeader';
import { connect } from 'react-redux';
import { getMotto } from 'redux/app/actions';

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

    let mottoBody;
    if (motto) {
      mottoBody = (
        <Fragment>
          <div className={styles.MottoSentence}>{motto.details}</div>
          <div className={styles.MottoSource}>—— {motto.source}</div>
        </Fragment>
      )
    } else {
      mottoBody = (
        <Fragment>
          <div className={styles.MottoSentence}>今天可以做点什么有意义的事情？</div>
          <div className={styles.MottoSource}>万思没</div>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <SimpleHeader></SimpleHeader>
        <header className={styles.MottoHeader}>
          {mottoBody}
        </header>
      </Fragment>
    );
  }
}

Motto.defaultProps = {
  motto: { details: "今天可以做点什么有意义的事情？", source: "万思没"},
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