import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Styled = {};

Styled.ReactMarkdown = styled(ReactMarkdown)`
  font-size: 1rem;

  hr {
    border: none;
    margin: 1rem 0;
  }
`;

export default Styled;
