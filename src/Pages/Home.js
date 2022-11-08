import styled from "styled-components";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NotesContext, notesActionTypes } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";

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
        dispatch({ type: notesActionTypes.GET_ALL_NOTES, payload: data });
      }
    };

    if (user) {
      fetchNotes();
    }
  }, [user, dispatch]);

  return (
    <HomeContainer>
      <StyledList>
        {notes &&
          notes.map(({ title, _id: id }) => (
            <li key={id}>
              <StyledLink to={`${id}`}>
                <h2>{title}</h2>
                <ChevronRightIcon />
              </StyledLink>
            </li>
          ))}
      </StyledList>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const StyledList = styled.ul`
  height: 100%;
  width: 100%;

  li {
    list-style: none;
    border-bottom: 1px solid #f1f5f9;

    &:hover {
      background-color: #f8fafc;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #1e293b;
  text-decoration: none;

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
  }

  svg {
    width: 25px;
    font-weight: bolder;
    margin-bottom: 0.2rem;
    flex-shrink: 0;
  }
`;

export default Home;
