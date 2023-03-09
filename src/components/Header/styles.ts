import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 10%;
  }
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
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;
