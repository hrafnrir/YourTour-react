import ChooseTour from "./ChooseTour/ChooseTour.jsx";
import CollectTour from "./CollectTour/CollectTour.jsx";
import Review from "./Review/Review.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Story from "./Story/Story.jsx";

const MainContent = (props) => {
  return (
    <main>
      <ChooseTour data={props.data.chooseTour} />
      <CollectTour data={props.data.collectTour} />
      <Review data={props.data.review} />
      <Gallery data={props.data.gallery} />
      <Story data={props.data.story} />
    </main>
  );
};

export default MainContent;
