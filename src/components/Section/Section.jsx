import React from 'react';
import PropTypes from 'prop-types';
import { TextSection, WrapSection } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <WrapSection>
      <TextSection>{title}</TextSection>
      {children}
    </WrapSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
