import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'semantic-ui-react';

import * as styles from '../styles';

const inputStyle = {
  'backgroundColor': styles.mainColor
};

class SearchInput extends Component {
  state = {
    query: ''
  };

  onKeyPress = e => {
    if (e.key === 'Enter') {
      const {query} = this.state;
      const {onSearch} = this.props;
      if (query) {
        onSearch(query);
      }
    }
  };

  onChange = (e, {value}) => this.setState({query: value});

  render() {
    return (
      <Input onKeyPress={this.onKeyPress} onChange={this.onChange} icon='search' placeholder='Search...'/>
    );
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchInput;