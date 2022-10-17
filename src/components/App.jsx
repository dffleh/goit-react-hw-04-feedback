import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { buttons } = this.state;
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <ul>
            <li>
              <button>Good</button>
            </li>
            <li>
              <button>Neutral</button>
            </li>
            <li>
              <button>Bad</button>
            </li>
          </ul>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good:</li>
            <li>Neutral:</li>
            <li>Bad:</li>
            <li>Total:</li>
            <li>Positive feedback:</li>
          </ul>
        </div>
      </div>
    );
  }
}
// export const App = () => {
//   return <FeedbackWidget />;
// };
