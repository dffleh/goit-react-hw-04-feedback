import { Item, List } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <button
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option[0].toUpperCase() + option.substring(1)}
          </button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
