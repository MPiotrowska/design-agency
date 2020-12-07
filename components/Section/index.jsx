import React from 'react';

export const Section = ({
  children,
  maxWidth = '450px',
  padding = '0 0 0 0',
  width = '',
  display = '',
  justifyContent = '',
}) => {
  const stylesObj = {
    maxWidth: maxWidth,
    padding: padding,
    width: width,
    display: display,
    justifyContent: justifyContent,
  };
  return <div style={stylesObj}>{children}</div>;
};
