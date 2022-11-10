import styled from "styled-components";
import { Link } from "react-router-dom";

const Styled = {};

Styled.Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

Styled.List = styled.ul`
  height: 100%;
  width: 100%;

  li {
    list-style: none;
    border-bottom: 1px solid #f1f5f9;

    &:hover {
      background-color: #f8fafc;
    }
  }
`;

Styled.LinkWrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #1e293b;
  text-decoration: none;

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
  }

  svg {
    width: 25px;
    font-weight: bolder;
    margin-bottom: 0.2rem;
    flex-shrink: 0;
  }
`;

Styled.ErrorWrapper = styled.div`
  border-radius: 10px;
  background-color: #fecaca;
  padding: 1rem;
  text-align: center;
`;

export default Styled;
