import PropTypes from 'prop-types';

export const NotificationMessage = ({ message }) => {
  return <p style={{ margin: 10, fontWeight: 'bold' }}>{message}</p>;
};

NotificationMessage.protoType = {
  message: PropTypes.string,
};
