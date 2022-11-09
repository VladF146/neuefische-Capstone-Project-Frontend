import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Toggle from "../Components/Toggle";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";
import { NotesContext, notesActionTypes } from "../Contexts/NotesContext";
import {
  SingleNoteContainer,
  Title,
  ContentHeader,
  StyledLabel,
  StyledTextarea,
  ReactMarkdownContainer,
  ButtonContainer,
  StyledButton,
  ErrorWrapper,
} from "./SingleNote.styles";
import {
  getSingleNote,
  updateSingleNote,
  deleteSingleNote,
} from "../Services/fetchNotes";

function SingleNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isMarkdown, setIsMarkdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthenticationContext);
  const { dispatch } = useContext(NotesContext);
  const { noteId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      setIsLoading(true);
      setError(null);

      const { response, data } = await getSingleNote(user, noteId);

      if (!response.ok) {
        setIsLoading(false);
        setError(data.error);
      }

      if (response.ok) {
        setIsLoading(false);
        setTitle(data.title);
        setContent(data.content);
      }
    };

    fetchNote();
  }, []);

  const handleUpdate = async () => {
    setIsLoading(true);
    setError(null);

    if (title.trim().length === 0) {
      setIsLoading(false);
      setError("Title can't be empty!");
      return;
    }

    if (content.trim().length === 0) {
      setIsLoading(false);
      setError("Content can't be empty!");
      return;
    }

    const { response, data } = await updateSingleNote(
      user,
      noteId,
      title,
      content
    );

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      dispatch({ type: notesActionTypes.UPDATE_SINGLE_NOTE, payload: data });
      setIsLoading(false);
      navigate("/");
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    setError(null);

    const { response, data } = await deleteSingleNote(user, noteId);

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      dispatch({ type: notesActionTypes.DELETE_SINGLE_NOTE, payload: data });
      setIsLoading(false);
      navigate("/");
    }
  };

  return (
    <SingleNoteContainer>
      <Title>{title}</Title>
      <ContentHeader>
        <StyledLabel>Content:</StyledLabel>
        <Toggle toggleState={isMarkdown} setToggleState={setIsMarkdown} />
      </ContentHeader>

      {isMarkdown && (
        <StyledTextarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      )}

      {!isMarkdown && (
        <ReactMarkdownContainer>
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        </ReactMarkdownContainer>
      )}
      {error && <ErrorWrapper>{error}</ErrorWrapper>}
      <ButtonContainer>
        <StyledButton
          type="button"
          disabled={isLoading}
          onClick={() => handleUpdate()}
        >
          Update note
        </StyledButton>
        <StyledButton type="button" disabled={isLoading} onClick={handleDelete}>
          Delete note
        </StyledButton>
      </ButtonContainer>
    </SingleNoteContainer>
  );
}

export default SingleNote;
