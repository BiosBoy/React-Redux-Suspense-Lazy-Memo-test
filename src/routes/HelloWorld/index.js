import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCount } from './controller/action';
import { Body } from '../../components';
import styles from '../../styles/index.scss';

class HelloWorld extends PureComponent {
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
        title='Hello World!'
        description='Do not wait, start coding now! :)'
        buttonClass={styles.helloWorld}
        descriptionClass={styles.helloStart}
      />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
