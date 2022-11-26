import styled from "styled-components";

export const AppBarContainer = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
`;

export const AlignContainer = styled.div`
  width: 100%;
  margin: 1rem 2rem;
  color: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: ${({ pathname }) =>
    pathname === "/" ? "flex-end" : "space-between"};
`;

export const CurrentTimeContainer = styled.div``;
