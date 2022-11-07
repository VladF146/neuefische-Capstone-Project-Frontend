import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";

function Header() {
  const { noteId } = useParams();
  const navigate = useNavigate();

  return (
    <StyledHeader>
      {noteId && (
        <BackButton onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
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
