import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Example } from './style';

class Base extends Component {

  /**
   * React Component constructor.
   * @param props
   */
  constructor(props) {
    super(props);
    //this.state = {
    //  show: props.show
    //}
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    //this.setState({
    //  show: nextProps.show
    //});
  }

  /**
   * Render error message.
   * @returns {XML}
   */
  render() {
    return (
      <Example>
        Example component
      </Example>
    );
  }
}

//Dialog.propTypes = {
//  show: PropTypes.bool,
//}

export default Base;
