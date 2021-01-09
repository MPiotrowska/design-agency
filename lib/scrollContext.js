import React from 'react';

const ScrollStateContext = React.createContext();
const ScrollDispatchContext = React.createContext();

const initialState = {
  heroIsInView: false,
  active: false,
  open: false,
};

function scrollReducer(state, action) {
  switch (action.type) {
    case 'scroll': {
      return {
        heroIsInView: action.payload,
      };
    }
    case 'toggleBurger': {
      return {
        active: !state.active,
        open: !state.open,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ScrollProvider({ children }) {
  const [state, dispatch] = React.useReducer(scrollReducer, initialState);
  return (
    <ScrollStateContext.Provider value={state}>
      <ScrollDispatchContext.Provider value={dispatch}>
        {children}
      </ScrollDispatchContext.Provider>
    </ScrollStateContext.Provider>
  );
}

function useScrollState() {
  const context = React.useContext(ScrollStateContext);
  if (context === undefined) {
    throw new Error('useScrollState must be used within a ScrollProvider');
  }
  return context;
}

function useScrollDispatch() {
  const context = React.useContext(ScrollDispatchContext);
  if (context === undefined) {
    throw new Error('useScrollDispatch must be used within a ScrollProvider');
  }
  return context;
}

export { ScrollProvider, useScrollState, useScrollDispatch };
