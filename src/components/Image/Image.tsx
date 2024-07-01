import React from 'react';
import './image.css';
import styled from 'styled-components';

interface ImageProps {
  src: string;
}

const Image: React.FC<ImageProps> = ({ src }) => {
  return <ImageWrapper src={src} />;
};

export default Image;


export const ImageWrapper = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;