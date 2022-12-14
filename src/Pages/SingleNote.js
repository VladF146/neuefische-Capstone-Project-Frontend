import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { TrashIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import Toggle from '../Components/Toggle';
import Modal from '../Components/Modal';
import ReactMarkdownForMath from '../Components/ReactMarkdownForMath';
import {
  AuthenticationContext,
  authActionTypes,
} from '../Contexts/AuthenticationContext';
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
  const { user, dispatch: authDispatch } = useContext(AuthenticationContext);
  const { dispatch } = useContext(NotesContext);
  const { noteId } = useParams();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

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
        setIsMarkdown(false);
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

  if (
    error?.response?.status === 401
    || errorUpdate?.response?.status === 401
    || errorDelete?.response?.status === 401
  ) authDispatch({ type: authActionTypes.SIGNOUT });

  const handleUpdate = async () => {
    refetchUpdate();
  };

  const handleDelete = async () => {
    refetchDelete();
  };

  return (
    <>
      <Styled.Container>
        <Styled.ContentHeader>
          {isMarkdown && (
            <Styled.Input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Note title..."
            />
          )}
          {!isMarkdown && <Styled.Title>{title}</Styled.Title>}
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
            Update
            <ArrowPathIcon />
          </Styled.Button>
          <Styled.Button
            type="button"
            disabled={isLoading || isLoadingUpdate || isLoadingDelete}
            onClick={() => setIsModalOpen(true)}
          >
            Delete
            <TrashIcon />
          </Styled.Button>
        </Styled.ButtonContainer>
      </Styled.Container>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} handleDelete={handleDelete} />
      )}
    </>
  );
}

export default SingleNote;
