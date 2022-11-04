import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NotesContext } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";

function Note() {
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(NotesContext);
  const { user } = useContext(AuthenticationContext);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(
        `https://neuefische-capstone-backend.herokuapp.com/api/notes/${id}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      const data = await response.json();
      setNote(data);
      setTitle(data.title);
      setContent(data.content);
    };

    fetchNote();
  }, []);

  const handleDelete = async () => {
    const response = await fetch(
      `https://neuefische-capstone-backend.herokuapp.com/api/notes/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_SINGLE_NOTE", payload: data });
      navigate("/");
    }
  };

  const handleUpdate = async () => {
    const response = await fetch(
      `https://neuefische-capstone-backend.herokuapp.com/api/notes/${id}`,
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
      dispatch({ type: "UPDATE_SINGLE_NOTE", payload: data });
      setIsLoading(false);
      navigate("/");
    }
  };

  return note ? (
    <>
      <button
        disabled={isLoading}
        type="button"
        onClick={() => setIsEditable(!isEditable)}
      >
        Change isEditable
      </button>
      {!isEditable && <h2>{title}</h2>}
      {!isEditable && <p>{content}</p>}
      {isEditable && (
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
      )}
      {isEditable && (
        <label>
          Content:
          <input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </label>
      )}
      {isEditable && (
        <button disabled={isLoading} type="button" onClick={handleUpdate}>
          Update note
        </button>
      )}
      {!isEditable && (
        <button disabled={isLoading} type="button" onClick={handleDelete}>
          Delete note
        </button>
      )}
    </>
  ) : (
    "Loading..."
  );
}

export default Note;
