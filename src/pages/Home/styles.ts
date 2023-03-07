import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 2rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Location = styled.div`
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 0.875rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: center;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;
