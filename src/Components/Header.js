import { useParams, useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { StyledHeader, BackButton } from "./Header.styles";

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

export default Header;
