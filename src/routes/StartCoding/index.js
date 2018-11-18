import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCount } from './controller/action';
import { Body } from '../../components';
import styles from '../../styles/index.scss';

class StartCoding extends PureComponent {
  _addCount = () => {
    const { count, startAddCount } = this.props;

    startAddCount(count + 1);
  }

  render() {
    const { countDoubl } = this.props;

    return (
      <Body
        count={countDoubl}
        onclick={this._addCount}
        title='On new page!!'
        description='Yes, start coding more now! :))'
        buttonClass={styles.helloWorld}
        descriptionClass={styles.helloStart}
      />
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
