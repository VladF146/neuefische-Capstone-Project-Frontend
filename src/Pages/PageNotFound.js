import { useNavigate } from 'react-router-dom';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Styled from './PageNotFound.styles';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <h1>Page not found!</h1>
      <Styled.Button
        type="button"
        onClick={() => navigate('/notes', { replace: true })}
      >
        Go back
        <ArrowUturnLeftIcon />
      </Styled.Button>
    </Styled.Container>
  );
}

export default PageNotFound;
