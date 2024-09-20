import adbanner from "/img/extras/0.png";

const HomeAdBanner = () => {
  return (
    // <section className="adBanner eventBanner my-3">
    //   <div className="row">
    //     <div className="col-md-6">
    //       <div className="ebDetails">
    //         <h3>
    //           International
    //           <span>Yoga Day</span>
    //         </h3>
    //         <p>Unite & Celebrate International Yoga Day 2024</p>
    //         <small>Sept 12, 2024 | 08:00 am to 09:00 am</small>
    //         <a href="#!" className="btn btn-primary btn-rounded">
    //           Know More
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="adBanner my-4">
      <a href="#!">
        <img src={adbanner} alt="" className="w-full" />
      </a>
    </section>
  );
};

export default HomeAdBanner;
