import { createContext, useReducer } from "react";

export const NotesContext = createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_NOTES":
      return {
        notes: action.payload,
      };
    case "POST_SINGLE_NOTE":
      return {
        notes: [action.payload, ...state.notes],
      };
    case "UPDATE_SINGLE_NOTE":
      return {
        notes: state.notes.map((element) => (element._id === action.payload._id ? action.payload : element)),
      };
    case "DELETE_SINGLE_NOTE":
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
