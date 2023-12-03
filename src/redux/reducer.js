import { ADD_TO_HISTORY,UPDATE_WORD_DETAILS } from './actions';

const initialState = {
  history: [],
  wordDetails: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case UPDATE_WORD_DETAILS:
      return {
        ...state,
        wordDetails: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;