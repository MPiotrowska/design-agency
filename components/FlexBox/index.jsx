import React from 'react';

export const FlexBox = ({
  children,
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  paddingTop = '',
}) => {
  const stylesObj = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    paddingTop: paddingTop,
  };

  return <div style={stylesObj}>{children}</div>;
};
