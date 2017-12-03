import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class MainButton extends Component {
  render() {
    const props = this.props;
    return (
      <Button color='orange' {...props}/>
    )
  }
}

export default MainButton;