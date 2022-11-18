import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Styled from './ReactMarkdownForMath.styles';

function ReactMarkdownForMath({ children }) {
  return (
    <Styled.ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {children}
    </Styled.ReactMarkdown>
  );
}

export default ReactMarkdownForMath;
