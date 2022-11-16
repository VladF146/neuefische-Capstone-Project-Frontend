import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Toggle from '../Components/Toggle';
import ReactMarkdownForMath from '../Components/ReactMarkdownForMath';
import { NotesContext, notesActionTypes } from '../Contexts/NotesContext';
import {
  AuthenticationContext,
  authActionTypes,
} from '../Contexts/AuthenticationContext';
import Styled from './CreateNote.styles';

import 'katex/dist/katex.min.css';
import { createSingleNote } from '../Services/fetchNotes';

function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isMarkdown, setIsMarkdown] = useState(true);
  const { dispatch } = useContext(NotesContext);
  const { user, dispatch: authDispatch } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const {
    isLoading, isError, error, refetch,
  } = useQuery(
    'create-single-note',
    () => createSingleNote(user, title, content),
    {
      enabled: false,
      retry: 0,
      onSuccess: (data) => {
        dispatch({
          type: notesActionTypes.POST_SINGLE_NOTE,
          payload: data.data,
        });
        navigate(`/notes/${data.data._id}`);
      },
    },
  );

  const handleCreateNote = async (event) => {
    event.preventDefault();
    refetch();
  };

  if (error?.response?.status === 401) authDispatch({ type: authActionTypes.SIGNOUT });

  return (
    <Styled.Container>
      <Styled.Form className="create" onSubmit={handleCreateNote}>
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
            placeholder="Note content..."
          />
        )}

        {!isMarkdown && (
          <Styled.ReactMarkdownContainer>
            <ReactMarkdownForMath>{content}</ReactMarkdownForMath>
          </Styled.ReactMarkdownContainer>
        )}

        <Styled.Button disabled={isLoading} type="submit">
          Create
          <PlusCircleIcon />
        </Styled.Button>
        {isError && (
          <Styled.ErrorWrapper>{error.response.data.error}</Styled.ErrorWrapper>
        )}
      </Styled.Form>
    </Styled.Container>
  );
}

export default CreateNote;
