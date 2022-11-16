import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { NotesContext, notesActionTypes } from '../Contexts/NotesContext';
import {
  AuthenticationContext,
  authActionTypes,
} from '../Contexts/AuthenticationContext';
import Styled from './Notes.styles';
import { getAllNotes } from '../Services/fetchNotes';

function Notes() {
  const { notes, dispatch } = useContext(NotesContext);
  const { user, dispatch: authDispatch } = useContext(AuthenticationContext);

  const { isLoading, isError, error } = useQuery(
    'get-all-notes',
    () => getAllNotes(user),
    {
      onSuccess: (data) => {
        dispatch({ type: notesActionTypes.GET_ALL_NOTES, payload: data.data });
      },
    },
  );

  if (error?.response?.status === 401) authDispatch({ type: authActionTypes.SIGNOUT });

  return (
    <Styled.Container>
      <Styled.List>
        {notes
          && notes.map(({ title, _id: id }) => (
            <li key={id}>
              <Styled.LinkWrapper to={`${id}`}>
                <h2>{title}</h2>
                <ChevronRightIcon />
              </Styled.LinkWrapper>
            </li>
          ))}
        {isLoading && 'Loading ...'}
        {isError && (
          <Styled.ErrorWrapper>{error.response.data.error}</Styled.ErrorWrapper>
        )}
      </Styled.List>
    </Styled.Container>
  );
}

export default Notes;
