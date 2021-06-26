import styled, { css, keyframes } from 'styled-components';

interface StoriesProps {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 426px;
  position: relative;
  display: grid;
  box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.4);
`;

export const ImagesContainer = styled.div`
  position: relative;
  grid-area: 1/1;
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.img<StoriesProps>`
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  opacity: 0;
  pointer-events: none;

  ${props => props.active && css`
    position: relative;
    opacity: 1;
    pointer-events: initial;
  `}
`;

export const SlideNav = styled.div`
  width: 100%;
  grid-area: 1/1;
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;

  > button {
    --webkit-appearance: none;
    --webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    opacity: 0;
  }
`;

export const SlideThumb = styled.div`
  display: flex;
  grid-column: 1/3;
`;

export const Thumb = styled.span<StoriesProps>`
  flex: 1;
  display: block;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 5px;
  border-radius: 2px;
  overflow: hidden;

  ${props => props.active && css`
    &::before {
      content: "";
      display: block;
      height: inherit;
      border-radius: 2px;
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateX(-100%);
      animation: ${thumb} 5s linear;
    }
  `}
`;

const thumb = keyframes`
  to {
    transform: initial;
  }
`;

