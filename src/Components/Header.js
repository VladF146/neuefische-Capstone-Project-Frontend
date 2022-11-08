import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function Header() {
  const { noteId } = useParams();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      {noteId && (
        <BackButton onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon />
        </BackButton>
      )}
      {!noteId && "Header"}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 1rem;
  background-color: #6ee7b7;
  text-align: center;
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: unset;

  svg {
    width: 20px;
    font-weight: bolder;
    margin-bottom: 0.2rem;
    cursor: pointer;
    color: black;

    &:hover {
      color: white;
    }
  }
`;

export default Header;
