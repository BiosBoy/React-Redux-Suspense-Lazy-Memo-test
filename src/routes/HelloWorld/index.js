import { PropTypes } from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCount } from './action';
import styles from '../../styles/index.scss';

class HelloWorld extends PureComponent {
  _handleClick = () => {
    const { count, startAddCount } = this.props;

    startAddCount(count + 1);
  }

  render() {
    const { countDoubl } = this.props;

    return (
      <Fragment>
        <div className={styles.helloWorld} onClick={this._handleClick}>
          <span>Hello World!</span>
          <span> + {countDoubl}</span>
        </div>
        <div className={styles.helloStart}> Do not wait, start coding now! :)</div>
      </Fragment>
    );
  }
}

HelloWorld.propTypes = {
  count: PropTypes.number,
  countDoubl: PropTypes.number,
  startAddCount: PropTypes.func
};

HelloWorld.defaultProps = {
  count: 0,
  countDoubl: 0,
  startAddCount: () => {}
};

const mapStateToProps = state => ({
  count: state.HelloWorld.count,
  countDoubl: state.HelloWorld.countDoubl
});

const mapDispatchToProps = dispatch => ({
  startAddCount: value => dispatch(addCount(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
