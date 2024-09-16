import { FiArrowRight } from "react-icons/fi";
import ThumbBox from "../common/ThumbBox";

const HomeLatestNews = () => {
  return (
    <>
      <section className="latestNews block">
        <div className=" wTitleBtns">
          <h4 className="wTitle">Latest News</h4>
          <div className="btns">
            <button className="btn btn-text">
              View All <FiArrowRight className="icon" />
            </button>
          </div>
        </div>

        <div className="firstNews">
          <ThumbBox
            tag="JioThings"
            title="The Next wave of Hospitality Innovation."
            desc="JioThings provides energy and operational efficiency solutions for all hospitality sectors..."
            date="Sept 4, 2024"
            readMoreLink="#!"
            img="/img/news/1.jpg"
            altBox
            readMore
          />
        </div>

        <div className="row">
          <div className="col-md-4">
            <ThumbBox
              tag="Jio"
              title="Millions of Indians have switched to True 5G"
              date="Sept 03, 2024"
              readMoreLink="#!"
              img="/img/news/2.jpg"
            />
          </div>
          <div className="col-md-4">
            <ThumbBox
              tag="Reliance Foundation"
              title="Reliance Foundation Scholarships 2024-25"
              date="Sept 02, 2024"
              readMoreLink="#!"
              img="/img/news/4.jpg"
            />
          </div>
          <div className="col-md-4">
            <ThumbBox
              tag="Retail"
              title="Everyday shopping made extraordinary"
              date="Sept 01, 2024"
              readMoreLink="#!"
              img="/img/news/3.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLatestNews;
