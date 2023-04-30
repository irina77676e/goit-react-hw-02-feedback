import React from 'react';
import { Li } from '../Statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <Li>Good: {good}</Li>
    <Li>Neutral: {neutral}</Li>
    <Li>Bad: {bad}</Li>
    <Li>Total: {total}</Li>
    <Li>
      Postitive feedback:
      {positivePercentage > 0 ? positivePercentage : 0} %
    </Li>
  </ul>
);
export default Statistics;
