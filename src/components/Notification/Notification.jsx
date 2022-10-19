import PropTypes from 'prop-types';

const { Message } = require('./Notification.styled');

export const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
