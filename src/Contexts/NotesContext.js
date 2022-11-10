import { createContext, useReducer, useMemo } from 'react';

export const NotesContext = createContext();

export const notesActionTypes = {
  GET_ALL_NOTES: 'GET_ALL_NOTES',
  POST_SINGLE_NOTE: 'POST_SINGLE_NOTE',
  UPDATE_SINGLE_NOTE: 'UPDATE_SINGLE_NOTE',
  DELETE_SINGLE_NOTE: 'DELETE_SINGLE_NOTE',
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case notesActionTypes.GET_ALL_NOTES:
      return {
        notes: action.payload,
      };
    case notesActionTypes.POST_SINGLE_NOTE:
      return {
        notes: [action.payload, ...state.notes],
      };
    case notesActionTypes.UPDATE_SINGLE_NOTE:
      return {
        notes: state.notes.map((element) => (element._id === action.payload._id ? action.payload : element)),
      };
    case notesActionTypes.DELETE_SINGLE_NOTE:
      return {
        notes: state.notes.filter(
          (element) => element._id !== action.payload._id,
        ),
      };
    default:
      return state;
  }
};

function NotesContextProvider({ children }) {
  const [state, dispatch] = useReducer(notesReducer, {
    notes: [],
  });

  const memoizedValue = useMemo(() => ({ ...state, dispatch }), []);

  return (
    <NotesContext.Provider value={memoizedValue}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesContextProvider;
