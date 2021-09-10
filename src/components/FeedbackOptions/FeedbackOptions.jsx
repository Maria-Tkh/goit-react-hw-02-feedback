import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          type="button"
          name="option"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedbac: PropTypes.func,
};
