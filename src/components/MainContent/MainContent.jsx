import ChooseTour from "./ChooseTour/ChooseTour.jsx";
import CollectTour from "./CollectTour/CollectTour.jsx";
import Review from "./Review/Review.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Story from "./Story/Story.jsx";

const MainContent = ({
  data: { chooseTour, collectTour, review, gallery, story },
}) => {
  return (
    <main>
      <ChooseTour data={chooseTour} />
      <CollectTour data={collectTour} />
      <Review data={review} />
      <Gallery data={gallery} />
      <Story data={story} />
    </main>
  );
};

export default MainContent;
