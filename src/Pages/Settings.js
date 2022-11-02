import styled from "styled-components";

function Settings() {
  return (
    <EditContainer>
      <h1>Settings page</h1>
    </EditContainer>
  );
}

const EditContainer = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;
export default Settings;
