import { ProgressBar, Form } from "react-bootstrap";

const QuickPoll = () => {
  return (
    <div className="sWidget">
      <h4 className="wTitle">Quick Poll</h4>

      <div className="pollBox">
        <div className="pbQuestion">
          <h4>Reliance Industries sees positive trading surge Today?</h4>
          <ProgressBar now={72} variant="success" />
          <span>5,213 Votes</span>
        </div>
        <div className="pbOptions">
          <Form.Check type="radio" label="Agree" />
          <Form.Check type="radio" label="Disagree" />
          <Form.Check type="radio" label="Don't Know" />
        </div>
        <button className="btn btn-outline-primary">Submit</button>
      </div>
    </div>
  );
};

export default QuickPoll;
