import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Toggle from "../Components/Toggle";
import { NotesContext, notesActionTypes } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";

import "katex/dist/katex.min.css";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMarkdown, setIsMarkdown] = useState(true);
  const { dispatch } = useContext(NotesContext);
  const { user } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleCreateNote = async (event) => {
    event.preventDefault();

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

    const response = await fetch(
      "https://neuefische-capstone-backend.herokuapp.com/api/notes",
      {
        method: "POST",
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
      dispatch({ type: notesActionTypes.POST_SINGLE_NOTE, payload: data });
      setIsLoading(false);
      navigate("/");
    }
  };

  return (
    <EditNotesContainer>
      <h1>Create new note</h1>
      <StyledForm className="create" onSubmit={handleCreateNote}>
        <StyledLabel>Title:</StyledLabel>
        <StyledInput
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
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

        <StyledButton disabled={isLoading} type="submit">
          Create note
        </StyledButton>
        {error && <div className="error">{error}</div>}
      </StyledForm>
    </EditNotesContainer>
  );
}

const EditNotesContainer = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  padding: 0.7rem;
  font-weight: bolder;
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  border-radius: 10px;
  padding: 0.7rem;
  font-weight: bolder;
  font-size: 1rem;
  height: 50%;
`;

const ReactMarkdownContainer = styled.div`
  border-radius: 10px;
  padding: 0.7rem;
  height: 50%;
  max-height: 50vh;
  border: 1px solid black;
  overflow-y: scroll;

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

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default CreateNote;
