import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Toggle from '../Components/Toggle';
import ReactMarkdownForMath from '../Components/ReactMarkdownForMath';
import { NotesContext, notesActionTypes } from '../Contexts/NotesContext';
import { AuthenticationContext } from '../Contexts/AuthenticationContext';
import Styled from './CreateNote.styles';

import 'katex/dist/katex.min.css';
import { createSingleNote } from '../Services/fetchNotes';

function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isMarkdown, setIsMarkdown] = useState(true);
  const { dispatch } = useContext(NotesContext);
  const { user } = useContext(AuthenticationContext);

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

  return (
    <Styled.Container>
      <h1>Create new note</h1>
      <Styled.Form className="create" onSubmit={handleCreateNote}>
        <Styled.Label>Title:</Styled.Label>
        <Styled.Input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
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

        <Styled.Button disabled={isLoading} type="submit">
          Create note
        </Styled.Button>
        {isError && (
          <Styled.ErrorWrapper>{error.response.data.error}</Styled.ErrorWrapper>
        )}
      </Styled.Form>
    </Styled.Container>
  );
}

export default CreateNote;
