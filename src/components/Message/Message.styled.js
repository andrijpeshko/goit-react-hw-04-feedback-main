import styled from 'styled-components';

export const TextMessage = styled.p`
  font-size: ${props => props.theme.fontSizes[4]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
`;
