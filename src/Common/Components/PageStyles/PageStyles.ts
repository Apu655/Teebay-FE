import styled from "styled-components";

export const PageStyle = styled.div`
  max-width: 80rem;
  margin: 0px auto;
  padding: 10px 0;
`;

export const ProductListWrapper = styled.div`
  gap: 10px;
  overflow: auto;
  max-height: 80vh;
  & > * {
    margin: 10px 0;
  }
`;
