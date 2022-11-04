import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NotesContext } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";

import NoteCard from "../Components/NoteCard";

function Home() {
  const { notes, dispatch } = useContext(NotesContext);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(
        "https://neuefische-capstone-backend.herokuapp.com/api/notes",
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "GET_ALL_NOTES", payload: data });
      }
    };

    if (user) {
      fetchNotes();
    }
  }, [user, dispatch]);

  return (
    <HomeContainer>
      {notes &&
        notes.map((note) => (
          <Link to={note._id} key={note._id}>
            <NoteCard note={note} />
          </Link>
        ))}
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  h1 {
    margin-bottom: 2rem;
  }
`;

export default Home;
