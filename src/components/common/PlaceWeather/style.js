import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
    url(${({ url }) => url});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AlignContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
`;
export const Text = styled.div`
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  color: #fff;
  margin: 2rem;
`;

export const MarginBox = styled.div`
  margin-top: 2rem;
`;
