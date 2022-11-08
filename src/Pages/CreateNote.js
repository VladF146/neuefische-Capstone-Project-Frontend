import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Toggle from "../Components/Toggle";
import { NotesContext, notesActionTypes } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMarkdown, setIsMarkdown] = useState(false);
  const { dispatch } = useContext(NotesContext);
  const { user } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);
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
      <StyledForm className="create" onSubmit={onSubmitHandler}>
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

        <StyledTextarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />

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
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
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
  min-height: 50%;
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
