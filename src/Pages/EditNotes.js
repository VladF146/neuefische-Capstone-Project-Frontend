import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";

function EditNotes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
      dispatch({ type: "POST_SINGLE_NOTE", payload: data });
      setIsLoading(false);
      navigate("/");
    }
  };

  return (
    <EditNotesContainer>
      <form className="create" onSubmit={onSubmitHandler}>
        <h3>Create new note</h3>

        <label>Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Content:</label>
        <input
          type="text"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />

        <button type="submit">Create note</button>
        {error && <div className="error">{error}</div>}
      </form>
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
export default EditNotes;
