import styled from 'styled-components';

export const StatList = styled.ul`
  list-style: none;
`;

export const StatItem = styled.li`
  border: ${props => props.theme.borders.light};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
  background: ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.light};
`;
