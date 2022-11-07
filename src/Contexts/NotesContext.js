import { createContext, useReducer } from "react";

export const NotesContext = createContext();

export const noteActionTypes = {
  GET_ALL_NOTES: "GET_ALL_NOTES",
  POST_SINGLE_NOTE: "POST_SINGLE_NOTE",
  UPDATE_SINGLE_NOTE: "UPDATE_SINGLE_NOTE",
  DELETE_SINGLE_NOTE: "DELETE_SINGLE_NOTE",
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case noteActionTypes.GET_ALL_NOTES:
      return {
        notes: action.payload,
      };
    case noteActionTypes.POST_SINGLE_NOTE:
      return {
        notes: [action.payload, ...state.notes],
      };
    case noteActionTypes.UPDATE_SINGLE_NOTE:
      return {
        notes: state.notes.map((element) =>
          element._id === action.payload._id ? action.payload : element
        ),
      };
    case noteActionTypes.DELETE_SINGLE_NOTE:
      return {
        notes: state.notes.filter(
          (element) => element._id !== action.payload._id
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

  return (
    <NotesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesContextProvider;
