import { useState, useEffect } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const [total, setTotal] = useState(0);
  const [rate, setRate] = useState(0);

  const { good, neutral, bad } = state;
  const options = Object.keys(state);

  const onLeaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
    setTotal(() => total + 1);
  };

  useEffect(() => {
    setRate(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={rate}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}

// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = e => {
//     this.setState(prevState => ({
//       [e.target.name]: prevState[e.target.name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((accum, item) => accum + item, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Number(
//       Math.round((this.state.good / this.countTotalFeedback()) * 100)
//     );
//   };

//   render() {
//     const options = this.state;
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positiveFeedback={positiveFeedback}
//             />
//           ) : (
//             <Notification message={'There is no feedback'} />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
// export const App = () => {
//   return <FeedbackWidget />;
// };
