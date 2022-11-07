import styled from "styled-components";
import { useParams } from "react-router-dom";

function SingleNote() {
  const { noteId } = useParams();
  return (
    <SingleNoteContainer>Single note with id: {noteId}</SingleNoteContainer>
  );
}

const SingleNoteContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export default SingleNote;
