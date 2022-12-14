import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Styled from './Toggle.styles';

function Toggle({ toggleState, setToggleState }) {
  return (
    <Styled.ToggleContainer>
      <Styled.ToggleButton
        title="Preview"
        type="button"
        activated={!toggleState}
        onClick={() => setToggleState(false)}
      >
        <EyeIcon />
      </Styled.ToggleButton>
      <Styled.ToggleButton
        title="Markdown"
        type="button"
        activated={toggleState}
        onClick={() => setToggleState(true)}
      >
        <CodeBracketIcon />
      </Styled.ToggleButton>
    </Styled.ToggleContainer>
  );
}

export default Toggle;
