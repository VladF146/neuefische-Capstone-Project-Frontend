import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import Toggle from '../Components/Toggle';
import ReactMarkdownForMath from '../Components/ReactMarkdownForMath';
import { AuthenticationContext } from '../Contexts/AuthenticationContext';
import { NotesContext, notesActionTypes } from '../Contexts/NotesContext';
import Styled from './SingleNote.styles';
import {
  getSingleNote,
  updateSingleNote,
  deleteSingleNote,
} from '../Services/fetchNotes';

function SingleNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isMarkdown, setIsMarkdown] = useState(false);
  const { user } = useContext(AuthenticationContext);
  const { dispatch } = useContext(NotesContext);
  const { noteId } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, error } = useQuery(
    ['get-single-note', noteId],
    () => getSingleNote(user, noteId),
    {
      onSuccess: (data) => {
        setTitle(data.data.title);
        setContent(data.data.content);
      },
    },
  );

  const {
    isLoading: isLoadingUpdate,
    isError: isErrorUpdate,
    error: errorUpdate,
    refetch: refetchUpdate,
  } = useQuery(
    ['update-single-note', noteId],
    () => updateSingleNote(user, noteId, title, content),
    {
      enabled: false,
      retry: 0,
      onSuccess: (data) => {
        dispatch({
          type: notesActionTypes.UPDATE_SINGLE_NOTE,
          payload: data.data,
        });
      },
    },
  );

  const {
    isLoading: isLoadingDelete,
    isError: isErrorDelete,
    error: errorDelete,
    refetch: refetchDelete,
  } = useQuery(
    ['delete-single-note', noteId],
    () => deleteSingleNote(user, noteId),
    {
      enabled: false,
      retry: 0,
      onSuccess: (data) => {
        dispatch({
          type: notesActionTypes.DELETE_SINGLE_NOTE,
          payload: data.data,
        });
        navigate('/', { replace: true });
      },
    },
  );

  const handleUpdate = async () => {
    refetchUpdate();
  };

  const handleDelete = async () => {
    refetchDelete();
  };

  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.ContentHeader>
        <Styled.Label>Content:</Styled.Label>
        <Toggle toggleState={isMarkdown} setToggleState={setIsMarkdown} />
      </Styled.ContentHeader>

      {isMarkdown && (
        <Styled.Textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      )}

      {!isMarkdown && (
        <Styled.ReactMarkdownContainer>
          <ReactMarkdownForMath>{content}</ReactMarkdownForMath>
        </Styled.ReactMarkdownContainer>
      )}
      {isError
        || isErrorUpdate
        || (isErrorDelete && (
          <Styled.ErrorWrapper>
            {error.response.data.error
              || errorUpdate.response.data.error
              || errorDelete.response.data.error}
          </Styled.ErrorWrapper>
        ))}
      <Styled.ButtonContainer>
        <Styled.Button
          type="button"
          disabled={isLoading || isLoadingUpdate || isLoadingDelete}
          onClick={() => handleUpdate()}
        >
          Update note
        </Styled.Button>
        <Styled.Button
          type="button"
          disabled={isLoading || isLoadingUpdate || isLoadingDelete}
          onClick={handleDelete}
        >
          Delete note
        </Styled.Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
}

export default SingleNote;
