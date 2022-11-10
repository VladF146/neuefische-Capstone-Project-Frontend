import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Toggle from "../Components/Toggle";
import { NotesContext, notesActionTypes } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";
import Styled from "./CreateNote.styles";

import "katex/dist/katex.min.css";
import { createSingleNote } from "../Services/fetchNotes";

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

    const { response, data } = await createSingleNote(user, title, content);

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    } else {
      dispatch({ type: notesActionTypes.POST_SINGLE_NOTE, payload: data });
      setIsLoading(false);
      navigate("/");
    }
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
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {content}
            </ReactMarkdown>
          </Styled.ReactMarkdownContainer>
        )}

        <Styled.Button disabled={isLoading} type="submit">
          Create note
        </Styled.Button>
        {error && <div className="error">{error}</div>}
      </Styled.Form>
    </Styled.Container>
  );
}

export default CreateNote;
