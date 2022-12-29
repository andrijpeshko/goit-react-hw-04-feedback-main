import PropTypes from 'prop-types';
import { TextMessage } from './Message.styled';

export default function Message({ message }) {
  return <TextMessage>{message}</TextMessage>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
