const EventBox = ({ date, title, time }: { date: string; title: string; time: string }) => (
  <div className="eventBox">
    <span className="ebMeta">{date}</span>
    <h4 className="ebTitle">{title}</h4>
    <span className="ebMeta">{time}</span>
    <a href="#!" className="btn btn-sm">
      Join Event
    </a>
  </div>
);

export default EventBox;
