import styled from 'styled-components';

const Styled = {};

Styled.Container = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  gap: 1rem;
`;

Styled.Title = styled.h1`
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

Styled.ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

Styled.Label = styled.label`
  font-size: 1rem;
`;

Styled.Textarea = styled.textarea`
  border-radius: 10px;
  padding: 0.7rem;
  font-weight: bolder;
  font-size: 1rem;
  height: 50%;
  width: 100%;
`;

Styled.ReactMarkdownContainer = styled.div`
  border-radius: 10px;
  padding: 0.7rem;
  height: 50%;
  max-height: 50vh;
  border: 1px solid black;
  overflow-y: scroll;
  width: 100%;

  img {
    width: 80%;
  }

  ul,
  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
`;

Styled.ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

Styled.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: #6ee7b7;
  border-radius: 10px;
  padding: 1rem;
  border: unset;
  font-weight: bolder;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #34d399;
  }
`;

Styled.ErrorWrapper = styled.div`
  border-radius: 10px;
  background-color: #fecaca;
  padding: 1rem;
  text-align: center;
`;

export default Styled;
