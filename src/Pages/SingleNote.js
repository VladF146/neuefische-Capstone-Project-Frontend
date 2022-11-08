import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";

function SingleNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(AuthenticationContext);
  const { noteId } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(
        `https://neuefische-capstone-backend.herokuapp.com/api/notes/${noteId}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
    };

    fetchNote();
  }, []);

  return (
    <SingleNoteContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </SingleNoteContainer>
  );
}

const SingleNoteContainer = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Content = styled.article`
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default SingleNote;
