import styled from 'styled-components';

export const TextSection = styled.h2`
  font-size: ${props => props.theme.fontSizes[5]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
`;

export const WrapSection = styled.div`
  text-content: center;
  list-style: none;
`;
