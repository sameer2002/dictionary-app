export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const UPDATE_WORD_DETAILS='UPDATE_WORD_DETAILS';

export const addToHistory = (word) => ({
  type: ADD_TO_HISTORY,
  payload: word,
});

export const updateWordDetails = (details) => ({
  type: UPDATE_WORD_DETAILS,
  payload: details,
});

export const searchWord = (searchTerm) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      const data = await response.json();
      console.log(data)
      dispatch(addToHistory(searchTerm));
      dispatch(updateWordDetails(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};