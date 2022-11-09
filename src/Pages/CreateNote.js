import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Toggle from "../Components/Toggle";
import { NotesContext, notesActionTypes } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";
import {
  CreateNoteContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  ReactMarkdownContainer,
  StyledButton,
  ContentHeader,
} from "./CreateNote.styles";

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
    <CreateNoteContainer>
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
    </CreateNoteContainer>
  );
}

export default CreateNote;
