import styled from "styled-components";
import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

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

const ToggleContainer = styled.div`
  display: flex;
  padding: 0.125rem;
  margin-left: 0.25rem;
  border-radius: 0.5rem;
  background-color: #f8fafc;
`;
const ToggleButton = styled.button`
  display: flex;
  padding: 0.5rem;
  background-color: ${({ activated }) => (activated ? "#ffffff" : "#f8fafc")};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  align-items: center;
  border-radius: 0.375rem;
  box-shadow: ${({ activated }) =>
    activated
      ? "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
      : ""};
  border: unset;
  cursor: pointer;

  svg {
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export default Toggle;
