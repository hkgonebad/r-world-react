import { useState } from "react";
import Sidebar from "../containers/Sidebar";
import NewsList from "../components/NewsList";

// Full list of news items
const allNewsItems = [
  {
    tag: "JioThings",
    title: "The Next wave of Hospitality Innovation.",
    desc: "JioThings provides energy and operational efficiency solutions for all hospitality sectors...",
    date: "Sept 4, 2024",
    readMoreLink: "#!",
    img: "/img/news/1.jpg",
    altBox: true,
    readMore: true,
  },
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
  {
    tag: "Retail",
    title: "Everyday shopping made extraordinary",
    date: "Sept 01, 2024",
    readMoreLink: "#!",
    img: "/img/news/3.jpg",
  },
  {
    tag: "Retail",
    title: "Everyday shopping made extraordinary",
    date: "Sept 01, 2024",
    readMoreLink: "#!",
    img: "/img/news/3.jpg",
  },
];

const News = () => {
  const [visibleNews, setVisibleNews] = useState(allNewsItems.slice(1, 4)); // Skip firstNews, show next 3 news
  const [showLoadMore, setShowLoadMore] = useState(allNewsItems.length > 4); // Show loadMore if more than 4 items

  const firstNews = allNewsItems[0]; // Set firstNews separately

  // Function to load more news
  const handleLoadMore = () => {
    const newVisibleNewsCount = visibleNews.length + 3;
    const newVisibleNews = allNewsItems.slice(1, newVisibleNewsCount + 1); // Skip firstNews

    setVisibleNews(newVisibleNews);

    // Hide LoadMore if all news items are displayed
    if (newVisibleNewsCount >= allNewsItems.length - 1) {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      <section className="homeBlock mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {/* Title Section */}
              <div className="wTitleBtns">
                <h4 className="wTitle">Latest News</h4>
              </div>

              {/* NewsList Component */}
              <div className="latestNews secBlock">
                <NewsList
                  newsItems={visibleNews} // Regular news items
                  firstNews={firstNews} // First news to highlight
                  handleLoadMore={handleLoadMore} // Load more function
                  showLoadMore={showLoadMore} // Show or hide LoadMore button
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
