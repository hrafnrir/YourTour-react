import React from 'react';
import ChooseTour from './ChooseTour/ChooseTour.jsx';
import CollectTour from './CollectTour/CollectTour.jsx';
import Review from './Review/Review.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Story from './Story/Story.jsx';

const MainContent = () => {
    return (
        <main>
            <ChooseTour />
            <CollectTour />
            <Review />
            <Gallery />
            <Story />
        </main>
    )
}

export default MainContent;