import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import NewsList from "../NewsList";

const newsItems = [
  {
    tag: "Jio",
    title: "Millions of Indians have switched to True 5G",
    date: "Sept 03, 2024",
    readMoreLink: "#!",
    img: "/img/news/2.jpg",
  },
  {
    tag: "Reliance Foundation",
    title: "Reliance Foundation Scholarships 2024-25",
    date: "Sept 02, 2024",
    readMoreLink: "#!",
    img: "/img/news/4.jpg",
  },
  {
    tag: "Retail",
    title: "Everyday shopping made extraordinary",
    date: "Sept 01, 2024",
    readMoreLink: "#!",
    img: "/img/news/3.jpg",
  },
];

const firstNews = {
  tag: "JioThings",
  title: "The Next wave of Hospitality Innovation.",
  desc: "JioThings provides energy and operational efficiency solutions for all hospitality sectors...",
  date: "Sept 4, 2024",
  readMoreLink: "#!",
  img: "/img/news/1.jpg",
  altBox: true,
  readMore: true,
};

const HomeLatestNews = () => {
  return (
    <>
      <div className="latestNews secBlock">
        <div className=" wTitleBtns">
          <h4 className="wTitle">Latest News</h4>
          <div className="btns">
            <Link className="btn btn-text" to={"/news"}>
              View All <FiArrowRight className="icon" />
            </Link>
          </div>
        </div>

        <NewsList newsItems={newsItems} firstNews={firstNews} showLoadMore={false} />
      </div>
    </>
  );
};

export default HomeLatestNews;
