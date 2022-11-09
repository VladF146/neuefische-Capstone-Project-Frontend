import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { ToggleContainer, ToggleButton } from "./Toggle.styles";

function Toggle({ toggleState, setToggleState }) {
  return (
    <ToggleContainer>
      <ToggleButton
        type="button"
        activated={!toggleState}
        onClick={() => setToggleState(false)}
      >
        <EyeIcon />
      </ToggleButton>
      <ToggleButton
        type="button"
        activated={toggleState}
        onClick={() => setToggleState(true)}
      >
        <CodeBracketIcon />
      </ToggleButton>
    </ToggleContainer>
  );
}

export default Toggle;
