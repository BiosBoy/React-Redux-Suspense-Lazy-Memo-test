import { PropTypes } from 'prop-types';
import React, { Fragment, PureComponent } from 'react';

class Body extends PureComponent {
  _handleClick = () => {
    const { onclick } = this.props;

    onclick();
  }

  render() {
    const { buttonClass, descriptionClass, title, description, count } = this.props;

    return (
      <Fragment>
        <button type='button' className={buttonClass} onClick={this._handleClick}>
          <span>{title}</span>
          <span> + {count}</span>
        </button>
        <div className={descriptionClass}>{description}</div>
      </Fragment>
    );
  }
}

Body.propTypes = {
  buttonClass: PropTypes.string,
  descriptionClass: PropTypes.string,
  onclick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  count: PropTypes.number
};

Body.defaultProps = {
  buttonClass: '',
  descriptionClass: '',
  onclick: () => {},
  title: '',
  description: '',
  count: 0
};

export default Body;
