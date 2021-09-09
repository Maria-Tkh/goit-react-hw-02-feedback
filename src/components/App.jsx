import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounter = ({ option }) => {
    console.log(option);
    this.setState(prevState => ({
      [option]: prevState.state[option] + 1,
    }));
  };

  render() {
    // const countTotalFeedback = options.reduce((totalFeedback, option) => totalFeedback+[option], 0);
    // // // console.log(countTotalFeedback);
    // const countPositiveFeedbackPercentage = Math.round(option.good * 100 / countTotalFeedback);

    return (
      <section>
        <h1 className="title">Please leave feedback </h1>

        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleCounter}
        />
        {/* <Statistics good={[option]} neutral={[option]} bad={[option]}
                    // total={countTotalFeedback}
                    // positivePercentage={countPositiveFeedbackPercentage}
                /> */}
      </section>
    );
  }
}
