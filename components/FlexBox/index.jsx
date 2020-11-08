import React from 'react';

export const FlexBox = ({
  children,
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
}) => {
  const stylesObj = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
  };

  return <div style={stylesObj}>{children}</div>;
};
