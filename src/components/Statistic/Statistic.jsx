import React from 'react';
import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statictic.styled';

export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <StatList>
        <StatItem> good: {good}</StatItem>
        <StatItem> neutral: {neutral}</StatItem>
        <StatItem> bad: {bad}</StatItem>
        <StatItem> total: {total}</StatItem>
        <StatItem> Positive feedback: {positivePercentage}%</StatItem>
      </StatList>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
