import React from 'react';

import Stories from '../../components/Stories';

import image1 from '../../assets/images/image-1.jpg';
import image2 from '../../assets/images/image-2.jpg';
import image3 from '../../assets/images/image-3.jpg';
import image4 from '../../assets/images/image-4.jpg';

import { Container } from './styles';

const images = [
  {
    src: image1,
    alt: "image1",
  },
  {
    src: image2,
    alt: "image2",
  },
  {
    src: image3,
    alt: "image3",
  },
  {
    src: image4,
    alt: "image4",
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <Stories images={images} />
    </Container>
  );
}

export default Home;