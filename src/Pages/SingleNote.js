import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Toggle from "../Components/Toggle";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";
import { NotesContext, notesActionTypes } from "../Contexts/NotesContext";

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
      <ButtonContainer>
        <StyledButton type="button" onClick={() => handleUpdate()}>
          Update note
        </StyledButton>
        <StyledButton type="button" onClick={handleDelete}>
          Delete note
        </StyledButton>
      </ButtonContainer>
    </SingleNoteContainer>
  );
}

const SingleNoteContainer = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  gap: 1rem;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  border-radius: 10px;
  padding: 0.7rem;
  font-weight: bolder;
  font-size: 1rem;
  height: 50%;
  width: 100%;
`;

const ReactMarkdownContainer = styled.div`
  border-radius: 10px;
  padding: 0.7rem;
  height: 50%;
  max-height: 50vh;
  border: 1px solid black;
  overflow-y: scroll;
  width: 100%;

  img {
    width: 80%;
  }

  ul,
  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: #6ee7b7;
  border-radius: 10px;
  padding: 1rem;
  border: unset;
  font-weight: bolder;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #34d399;
  }
`;

export default SingleNote;
