import styled from "styled-components";

function Toggle({ toggleState, setToggleState }) {
  return (
    <ToggleContainer>
      <ToggleButton
        type="button"
        activated={!toggleState}
        onClick={() => setToggleState(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </ToggleButton>
      <ToggleButton
        type="button"
        activated={toggleState}
        onClick={() => setToggleState(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
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
