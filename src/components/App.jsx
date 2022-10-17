import { Component } from 'react';
import FeedbackButtons from './feedback/FeedbackButtons';
import { FButtons, TitleButtons } from './App.styled';

export class App extends Component {
  state = {
    buttons: [
      { id: 'id-1', name: 'good', quantity: 0 },
      { id: 'id-2', name: 'neutral', quantity: 0 },
      { id: 'id-3', name: 'bad', quantity: 0 },
    ],
  };
  render() {
    const { buttons } = this.state;
    return (
      <div>
        <FButtons>
          <TitleButtons>Please leave feedback</TitleButtons>
          <FeedbackButtons buttons={buttons} />
        </FButtons>
      </div>
    );
  }
}
// export const App = () => {
//   return <FeedbackWidget />;
// };
