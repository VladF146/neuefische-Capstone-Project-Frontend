import styled from 'styled-components';

const Styled = {};

Styled.Container = styled.div`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

Styled.Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 10%;
  gap: 1rem;
  width: 100%;

  label,
  input,
  button {
    width: 100%;
  }
`;

Styled.Label = styled.label`
  font-size: 1rem;
`;

Styled.Input = styled.input`
margin-top: 0.25rem;
  border-radius: 10px;
  padding: 1rem;
  font-weight: bolder;
  font-family: monospace;
  font-size: 1rem;
  box-shadow: inset 0px 0px 10px 0 rgba(0, 0, 0, 0.1);
  border: none;
  background-color: #f8fafc;
`;

Styled.Textarea = styled.textarea`
  flex-grow: 1;
  border-radius: 10px;
  padding: 1rem;
  font-weight: bolder;
  font-size: 1rem;
  height: 50%;
  width: 100%;
  box-shadow: inset 0px 0px 10px 0 rgba(0, 0, 0, 0.1);
  border: none;
  resize: none;
  background-color: #f8fafc;

  &::-webkit-scrollbar {
  width: 5px;
}

&::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
&::-webkit-scrollbar-thumb {
  background: #6ee7b7; 
  border-radius: 10px;
}

&::-webkit-scrollbar-thumb:hover {
  background: #34d399; 
}
`;

Styled.ReactMarkdownContainer = styled.div`
  flex-grow: 1;
  border-radius: 10px;
  height: 50%;
  width: 100%;
  overflow-y: scroll;

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

  &::-webkit-scrollbar {
  width: 5px;
}

&::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
&::-webkit-scrollbar-thumb {
  background: #6ee7b7; 
  border-radius: 10px;
}

&::-webkit-scrollbar-thumb:hover {
  background: #34d399; 
}
`;

Styled.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

Styled.ContentHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`;

Styled.ErrorWrapper = styled.div`
  border-radius: 10px;
  background-color: #fecaca;
  padding: 1rem;
  text-align: center;
`;

Styled.Title = styled.span`
display: block;
flex-grow: 1;
font-size: 2rem;
font-weight: bolder;
`;

export default Styled;
