import { FiPlayCircle } from "react-icons/fi";
import clsx from "clsx"; // Optional: if you want to simplify conditional classNames
import { Link } from "react-router-dom";
import colors from "../../config/colors";

type ThumbBoxProps = {
  tag: string;
  title: string;
  desc?: string;
  date: string;
  isLocked?: boolean;
  video?: boolean;
  videoLink?: string;
  time?: string;
  readMore?: boolean;
  readMoreLink?: string;
  altBox?: boolean;
  img?: string;
  className?: string;
};

const ThumbBox = ({
  tag,
  title,
  desc,
  date,
  isLocked = false,
  video = false,
  videoLink = "#!",
  time,
  altBox = false,
  img = "/path/to/default-img.png", // Default value if img is missing
  readMore = false,
  readMoreLink = "#!",
  className = "",
}: ThumbBoxProps) => {
  const tagColors: { [key: string]: string } = {
    JioThings: colors.jioThings,
    Jio: colors.jio,
    "Reliance Foundation": colors.relianceFoundation,
    Retail: colors.retail,
    NMACC: colors.nmacc,
    "Reliance Industries": colors.ril,
  };

  return (
    <div className={clsx("wBox", className, { isLocked, wBoxAlt: altBox })}>
      <div className="wThumb">
        {video && (
          <a href={videoLink} className=" wIcon">
            <FiPlayCircle />
          </a>
        )}
        <img src={img} alt={title} loading="lazy" />
      </div>
      <div className="wInfo">
        <span className="tag badge" style={{ backgroundColor: tagColors[tag] || "bg-secondary" }}>
          {tag}
        </span>
        <Link to={readMoreLink}>
          <h3>{title}</h3>
        </Link>

        {desc && <p>{desc}</p>}
        <small>
          {date} {video && time && `| ${time}`}
        </small>

        {readMore && (
          <a href={readMoreLink} className="btn btn-light">
            Read More
          </a>
        )}
      </div>
    </div>
  );
};

export default ThumbBox;
