import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

export const Title = ({ children }) => (
  <Typography component="h2" variant="h6" color="primary" gutterBottom>
    {children}
  </Typography>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
