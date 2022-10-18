import { Item, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {Object.keys(options).map(option => (
        <Item key={option}>
          <button name={option} type="button" onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.substring(1)}
          </button>
        </Item>
      ))}
    </List>
  );
};
