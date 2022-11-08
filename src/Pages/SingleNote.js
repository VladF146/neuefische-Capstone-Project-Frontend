import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Toggle from "../Components/Toggle";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";

function SingleNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isMarkdown, setIsMarkdown] = useState(false);
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
      <ContentHeader>
        <StyledLabel>Content:</StyledLabel>
        <Toggle toggleState={isMarkdown} setToggleState={setIsMarkdown} />
      </ContentHeader>

      {isMarkdown && (
        <StyledTextarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      )}

      {!isMarkdown && (
        <ReactMarkdownContainer>
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        </ReactMarkdownContainer>
      )}
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
  gap: 1rem;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  border-radius: 10px;
  padding: 0.7rem;
  font-weight: bolder;
  font-size: 1rem;
  height: 50%;
  width: 100%;
`;

const ReactMarkdownContainer = styled.div`
  border-radius: 10px;
  padding: 0.7rem;
  height: 50%;
  max-height: 50vh;
  border: 1px solid black;
  overflow-y: scroll;
  width: 100%;

  img {
    width: 80%;
  }

  ul,
  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
`;

export default SingleNote;
