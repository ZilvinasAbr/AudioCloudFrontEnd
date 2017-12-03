import React from 'react';
import {Link} from 'react-router-dom';

const BlackLink = props => (
  <Link style={{color: 'black'}} {...props}/>
);

export default BlackLink;