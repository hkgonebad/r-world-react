import { FiPlus } from "react-icons/fi";
import ThumbBox from "./common/ThumbBox";

// Structure of a News Item
type NewsItem = {
  tag: string;
  title: string;
  date: string;
  readMoreLink: string;
  img: string;
  desc?: string;
  altBox?: boolean;
  readMore?: boolean;
};

// Props for the NewsList component
interface NewsListProps {
  newsItems: NewsItem[];
  firstNews?: NewsItem;
  handleLoadMore?: () => void;
  showLoadMore?: boolean;
}

const NewsList: React.FC<NewsListProps> = ({ newsItems, firstNews, handleLoadMore, showLoadMore }) => {
  return (
    <>
      {/* Render First News with special properties */}
      {firstNews && (
        <div className="firstNews">
          <ThumbBox {...firstNews} />
        </div>
      )}

      {/* Render remaining news */}
      <div className="row">
        {newsItems.map((news, index) => (
          <div className="col-md-4" key={index}>
            <ThumbBox {...news} />
          </div>
        ))}
      </div>

      {/* Load More button */}
      {showLoadMore && handleLoadMore && (
        <div className="loadMore btn" onClick={handleLoadMore}>
          <FiPlus className="icon" /> Load More
        </div>
      )}
    </>
  );
};

export default NewsList;
