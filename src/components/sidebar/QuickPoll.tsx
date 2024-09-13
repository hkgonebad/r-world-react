import { ProgressBar, Form } from "react-bootstrap";

const QuickPoll = () => {
  return (
    <div className="sWidget">
      <h4 className="wTitle">Quick Poll</h4>

      <div className="pollBox">
        <div className="pbQuestion">
          <h4>Reliance Industries sees positive trading surge Today?</h4>
          <ProgressBar now={72} />
          <span>5,213 Votes</span>
        </div>
        <div className="pbOptions">
          <Form.Check type="radio" label="Agree" name="poll" id="agree" />
          <Form.Check type="radio" label="Disagree" name="poll" id="disagree" />
          <Form.Check type="radio" label="Don't Know" name="poll" id="dontknow" />
        </div>
        <button className="btn btn-outline-primary">Submit</button>
      </div>
    </div>
  );
};

export default QuickPoll;
