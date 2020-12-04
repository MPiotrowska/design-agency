import React from 'react';

export const Section = ({
  children,
  maxWidth = '450px',
  padding = '0 0 0 0',
}) => {
  const stylesObj = {
    maxWidth: maxWidth,
    padding: padding,
  };
  return <div style={stylesObj}>{children}</div>;
};
