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
      const response = await fetch(
        `https://neuefische-capstone-backend.herokuapp.com/api/notes/${noteId}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
    };

    fetchNote();
  }, []);

  const handleUpdate = async () => {
    const response = await fetch(
      `https://neuefische-capstone-backend.herokuapp.com/api/notes/${noteId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ title, content }),
      }
    );
    const data = await response.json();

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
    const response = await fetch(
      `https://neuefische-capstone-backend.herokuapp.com/api/notes/${noteId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: notesActionTypes.DELETE_SINGLE_NOTE, payload: data });
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
