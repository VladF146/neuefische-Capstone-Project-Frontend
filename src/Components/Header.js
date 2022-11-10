import { useParams, useNavigate } from 'react-router-dom';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Styled from './Header.styles';

function Header() {
  const { noteId } = useParams();
  const navigate = useNavigate();

  return (
    <Styled.Header>
      {noteId && (
        <Styled.BackButton onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon />
        </Styled.BackButton>
      )}
      {!noteId && 'Header'}
    </Styled.Header>
  );
}

export default Header;
