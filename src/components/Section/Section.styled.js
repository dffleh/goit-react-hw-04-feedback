import styled from 'styled-components';

export const SectionWrap = styled.section`
  display: block;
  margin: 20px auto;
  width: 400px;
  background: #343436;
`;

export const Title = styled.h2`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding-top: 35px;
  animation: text 12s infinite linear;
  padding-left: 100%;
  white-space: nowrap;
  @keyframes text {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-170%, 0);
    }
  }
`;
