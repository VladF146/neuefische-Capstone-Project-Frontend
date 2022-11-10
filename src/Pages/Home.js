import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { NotesContext, notesActionTypes } from "../Contexts/NotesContext";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";
import Styled from "./Home.styles";
import { getAllNotes } from "../Services/fetchNotes";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { notes, dispatch } = useContext(NotesContext);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      setError(null);
      const { response, data } = await getAllNotes(user);

      if (!response.ok) {
        setIsLoading(false);
        setError(data.error);
      } else {
        dispatch({ type: notesActionTypes.GET_ALL_NOTES, payload: data });
        setIsLoading(false);
      }
    };

    if (user) {
      fetchNotes();
    }
  }, [user, dispatch]);

  return (
    <Styled.Container>
      <Styled.List>
        {notes &&
          notes.map(({ title, _id: id }) => (
            <li key={id}>
              <Styled.LinkWrapper to={`${id}`}>
                <h2>{title}</h2>
                <ChevronRightIcon />
              </Styled.LinkWrapper>
            </li>
          ))}
      </Styled.List>
      {isLoading && "Loading ..."}
      {error && <Styled.ErrorWrapper>{error}</Styled.ErrorWrapper>}
    </Styled.Container>
  );
}

export default Home;
