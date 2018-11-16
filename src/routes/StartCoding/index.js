import { PropTypes } from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCount } from './action';
import styles from '../../styles/index.scss';

class StartCoding extends PureComponent {
  componentDidMount() {
    const { count, startAddCount } = this.props;

    startAddCount(count + 1);
  }

  _handleClick = () => {
    const { count, startAddCount } = this.props;

    startAddCount(count + 1);
  }

  render() {
    const { countDoubl } = this.props;

    console.log(countDoubl, 'countDoubl StartCoding');

    return (
      <Fragment>
        <div className={styles.helloWorld} onClick={this._handleClick}>
          <span>On new page!</span>
          <span> + {countDoubl}</span>
        </div>
        <div className={styles.helloStart}> Yes, start coding more now! :))</div>
      </Fragment>
    );
  }
}

StartCoding.propTypes = {
  count: PropTypes.number,
  countDoubl: PropTypes.number,
  startAddCount: PropTypes.func
};

StartCoding.defaultProps = {
  count: 0,
  countDoubl: 0,
  startAddCount: () => {}
};

const mapStateToProps = state => ({
  count: state.StartCoding.count,
  countDoubl: state.StartCoding.countDoubl
});

const mapDispatchToProps = dispatch => ({
  startAddCount: value => dispatch(addCount(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartCoding);
