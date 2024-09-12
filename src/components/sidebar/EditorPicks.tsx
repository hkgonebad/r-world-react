import ThumbBox from "../common/ThumbBox";

const EditorPicks = () => {
  const picks = [
    {
      img: "/img/editor-picks/1.png",
      tag: "Reliance Industries",
      title: `Nita M Ambani : "India House will reflect the strides India has made in the Olympic move forward"`,
      date: "Sept 03, 2024",
    },
    {
      img: "/img/editor-picks/2.png",
      tag: "Retail",
      title: `Why Tira is the next big thing in India's beauty retail with its Tech-Savy approach to beauty`,
      date: "Sept 03, 2024",
    },
    {
      img: "/img/editor-picks/3.png",
      tag: "Reliance Industries",
      title: `Viacom18 delivers a historic Olympics presentation with record-breaking viewership numbers`,
      date: "Sept 03, 2024",
    },
  ];

  return (
    <div className="sWidget">
      <h4 className="wTitle">Editor Picks</h4>
      {picks.map((pick, index) => (
        <ThumbBox key={index} {...pick} altBox />
      ))}
    </div>
  );
};

export default EditorPicks;
