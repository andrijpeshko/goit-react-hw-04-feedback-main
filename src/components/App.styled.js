import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  fontsize: ${props => props.theme.fontSizes[4]}px;
  border: ${props => props.theme.borders.heading};
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes[6]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
