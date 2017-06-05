import { FEEDBACK } from '../constants/action_types.js';

const initialState = {};

export default function feedback(state = initialState, action) {
  switch (action.type) {
    case FEEDBACK: {
      console.log(action)
      const newState = { ...state };
      newState[action.revId] = action.data.suggestions;
      return newState;
    }
    default:
      return state;
  }
}
