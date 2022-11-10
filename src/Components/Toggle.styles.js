import styled from 'styled-components';

const Styled = {};

Styled.ToggleContainer = styled.div`
  display: flex;
  padding: 0.125rem;
  border-radius: 0.5rem;
  background-color: #f8fafc;
  align-self: end;
  box-shadow: inset 0px 0px 10px 0 rgba(0, 0, 0, 0.1);

`;
Styled.ToggleButton = styled.button`
  display: flex;
  padding: 0.875rem;
  background-color: ${({ activated }) => (activated ? '#ffffff' : 'transparent')};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  align-items: center;
  border-radius: 0.375rem;
  box-shadow: ${({ activated }) => (activated
    ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    : '')};
  border: unset;
  color: ${({ activated }) => (activated
    ? 'black'
    : '#9ca3af')};
  cursor: pointer;

  svg {
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export default Styled;
