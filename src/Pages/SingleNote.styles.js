import styled from 'styled-components';

const Styled = {};

Styled.Container = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
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
  padding: 0.7rem;
  font-weight: bolder;
  font-size: 1rem;
  height: 50%;
  width: 100%;
  box-shadow: inset 0px 0px 15px 0 rgba(0, 0, 0, 0.1);
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

Styled.BackButton = styled.button`
  background-color: transparent;
  border: unset;

  svg {
    width: 20px;
    font-weight: bolder;
    margin-bottom: 0.2rem;
    cursor: pointer;
    color: black;

    &:hover {
      color: white;
    }
  }
`;

Styled.Title = styled.span`
display: block;
flex-grow: 1;
font-size: 2rem;
font-weight: bolder;
`;

export default Styled;
