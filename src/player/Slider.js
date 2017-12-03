import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Progress} from 'semantic-ui-react';
import offsetLeft from '../utils/DomUtils';

const getPercentage = (value, max) => max ? Math.floor(value * 100 / max) : 0;

class Slider extends Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    console.log(window.innerWidth);
    this.setState({width: window.innerWidth});
  };

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('resize', this.updateWindowDimensions);
  }

  onClick = e => {
    const {onChange} = this.props;
    const percent = (e.clientX - offsetLeft(e.currentTarget)) / e.currentTarget.offsetWidth;
    // const currentTime = Math.floor(percent * max);
    onChange(percent);
  };

  onMouseMove = e => {
    const {domNode, props} = this;
    const {onChange} = props;

    const diff = e.clientX - offsetLeft(domNode);
    const percent = Math.min(Math.max(diff / domNode.offsetWidth, 0), 1);
    // const currentTime = Math.floor(percent * max);
    onChange(percent);
  };

  onMouseDown = () => {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  };

  onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  render() {
    const {width} = this.state;
    const {max, value} = this.props;

    return (
      <div
        ref={node => this.domNode = node}
        onClick={this.onClick}
      >
        <Progress
          style={{width: `${width - width/2}px`}}
          color='orange'
          percent={getPercentage(value, max)}
          size='tiny'
          tabIndex="0"
        />
      </div>
    );
  }
}

Slider.propTypes = {
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Slider;
