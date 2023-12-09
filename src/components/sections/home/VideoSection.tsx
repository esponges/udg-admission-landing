'use client';

import AwesomeSlider from 'react-awesome-slider';
import { twMerge as tw } from 'tailwind-merge';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const CARROUSEL_IMAGES = [
  {
    source: '/images/hp_printer.jpg',
    alt: 'printer',
  },
  {
    source: '/images/hp_toner.jpg',
    alt: 'toner',
  },
];

const AutoplaySlider = withAutoplay(AwesomeSlider);

const VideoSection = () => {
  return (
    <section
      className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}
    >
      <div className={tw(`max-w-7xl mx-auto`)}>
        <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
          <div className={tw(`w-full`)}>
            <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
              <AutoplaySlider play interval={3000} media={CARROUSEL_IMAGES} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
