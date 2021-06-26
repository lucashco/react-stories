import React, { useCallback, useEffect, useState } from 'react';

import { 
  Container,
  ImagesContainer,
  Image,
  SlideNav,
  SlideThumb,
  Thumb,
} from './styles';

type IImages = {
  src: string;
  alt: string;
}

interface StoriesProps {
  images: IImages[];
}

const Stories: React.FC<StoriesProps> = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleNextNavigation = useCallback(() => {
    if (active >= images.length - 1) {
      return setActive(0);
    }

    return setActive(prevState => prevState + 1);
  }, [active, images.length]);

  const handlePrevNavigation = useCallback(() => {
    if (active <= 0) {
      return setActive(images.length - 1);
    }
    return setActive(prevState => prevState - 1);
  }, [active, images.length]);

  useEffect(() => {
    const timer = setTimeout(handleNextNavigation, 1000 * 5);  // 5 seconds

    return () => clearTimeout(timer);
  }, [handleNextNavigation]);

  return (
    <Container>
      <ImagesContainer>
        {images.map((image, index) => (
          <Image key={image.alt} src={image.src} alt={image.alt} active={active === index} />
        ))}
      </ImagesContainer>
      <SlideNav>
        <SlideThumb>
          {images.map((image, index) => (
            <Thumb key={image.alt} active={active === index} />
          ))}
        </SlideThumb>
        <button onClick={handlePrevNavigation}></button>
        <button onClick={handleNextNavigation}></button>
      </SlideNav>
    </Container>
  );
}

export default Stories;