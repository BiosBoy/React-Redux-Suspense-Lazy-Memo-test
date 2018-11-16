import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Footer } from '../components';
import styles from '../styles/index.scss';

class AppLayout extends Component {
  render() {
    const { countDoubl, children } = this.props;
    console.log(this.props.state.router)

    return (
      <div className={styles.appWrapper}>
        <Header countDoubl={countDoubl} />
        {children}
        <Footer countDoubl={countDoubl} />
      </div>
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
  countDoubl: PropTypes.number,
  startAddCount: PropTypes.func
};

AppLayout.defaultProps = {
  count: 0,
  countDoubl: 0,
  startAddCount: () => {}
};

const mapStateToProps = state => ({
  state,
  count: state.count,
  countDoubl: state.countDoubl
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(AppLayout)
);
