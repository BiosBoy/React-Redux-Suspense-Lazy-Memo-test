import { LOCATION_CHANGE } from 'connected-react-router';
import initialState from './initialState';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOCATION_CHANGE]: (state, action) => ({
    ...state,
    locationChange: action.payload.location.pathname
  })
};

// ------------------------------------
// Reducer
// ------------------------------------
const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
