// import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          name="option"
          onClick={onLeaveFeedback}
          //  value={ this.state[option]}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
