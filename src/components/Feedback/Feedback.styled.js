import styled from 'styled-components';

export const FeedbackWrap = styled.div`
  border: ${props => props.theme.borders.heading};
`;

export const FeedbackButton = styled.button`
  width: calc(100% / 3);
  border: ${props => props.theme.borders.light};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
  background: ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.light};

  &:hover {
    color: ${props => props.theme.colors.border};
    background: ${props => props.theme.colors.light};
  }
`;
