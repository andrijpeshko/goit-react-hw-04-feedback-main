import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackWrap, FeedbackButton } from './Feedback.styled';

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <FeedbackWrap>
      {options.map(option => (
        <FeedbackButton
          type="button"
          key={option}
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackWrap>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
