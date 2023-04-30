import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';

class Feedback extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  onLeaveFeedback = e => {
    if (e.target.textContent === 'Good') {
      this.setState(prevState => ({
        Good: prevState.Good + 1,
      }));
    }

    if (e.target.textContent === 'Neutral') {
      this.setState(prevState => ({
        Neutral: prevState.Neutral + 1,
      }));
    }

    if (e.target.textContent === 'Bad') {
      this.setState(prevState => ({
        Bad: prevState.Bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const valuesArray = Object.values(this.state);
    return valuesArray.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.Good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
    const btnNames = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnNames}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {Good > 0 || Neutral > 0 || Bad > 0 ? (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification title="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
export default Feedback;
