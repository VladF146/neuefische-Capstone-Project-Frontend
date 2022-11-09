import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect } from "react";
import { NotesContext, notesActionTypes } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";
import { HomeContainer, StyledList, StyledLink } from "./Home.styles";
import { getAllNotes } from "../Services/fetchNotes";

function Home() {
  const { notes, dispatch } = useContext(NotesContext);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    const fetchNotes = async () => {
      const { response, data } = await getAllNotes(user);

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

export default Home;
